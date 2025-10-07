import json
import sqlite3
import pandas as pd
import requests
import pprint
import os
import requests
import colorama
import argparse

from dotenv import load_dotenv

from utilities.transform import transform
import utilities.transform

# API URL Requests
# USER_DATA_REQUEST = "https://api.brawlstars.com/v1/players/%23QGY0C2GV"

# Storage for succesful API responses
USER_DATA_OUTPUT_FILE = "./data/data.json"

# Backups
MY_DATA_BACKUP = "./data/backup_data.json"
# DATABASE_FILE = "should_play.db"
# DATABASE_FILE2 = "fav_brawlers.db"
# DATABASE_FILE3 = "underplayed.db"

# SETUP for API_KEY
load_dotenv()

# 2. Access the variables using os.environ
API_KEY = os.environ.get("API_KEY")

# Check if the key was loaded (always good practice!)
if not API_KEY:
    raise EnvironmentError("API_KEY not found in .env file.")


def get_args():
    # Create the parser object
    parser = argparse.ArgumentParser(
        description="Run the ETL pipeline with custom settings."
    )
    # The parser is now ready to accept arguments

    parser.add_argument(
        "--source",
        type=str,
        required=True,
        help="The API endpoint or file path to extract data from.",
    )
    parser.add_argument(
        "--table",
        type=str,
        default="etl_output",  # Default value is 'etl_output'
        help="The name of the SQLite table to load the data into.",
    )
    parser.add_argument(
        "--db-path",
        type=str,
        default="data.db",  # Default value is 'etl_output'
        help="The name of the SQLITE database to save into",
    )

    return parser


def response_into_json(url: str, output_file: str) -> bool:
    try:
        headers = {"Authorization": f"Bearer {API_KEY}"}
        response = requests.get(url, headers=headers)

        if response.status_code != 200:
            print(
                f"{colorama.Fore.RED}Request Failed. Response Status Code: {response.status_code}"
            )
            # print(f"{colorama.Style.RESET_ALL}")
            return False

        print(
            f"{colorama.Fore.GREEN} -----------------Request successful!---------------"
        )

        print(f"{colorama.Style.RESET_ALL}")

        # Changes successful response into a data type of .json (dictionary)
        response = response.json()
        # print(type(response))

        # Saves response to output file
        with open(output_file, "w") as outfile:
            # Use indent=4 for human-readable formatting
            json.dump(response, outfile, indent=4)
            # print("Data written to response.json")
            # print(pprint.pp(response))

        return True

    except Exception as e:
        print(f"Error: error retrieveing API data: {e}")


def extract(source: str) -> dict:

    user_request_success = response_into_json(source, USER_DATA_OUTPUT_FILE)

    if user_request_success == False:
        print(
            f"{colorama.Fore.RED}User request failed. Using the '{MY_DATA_BACKUP}' file instead"
        )
        print(f"{colorama.Style.RESET_ALL}")

        with open(MY_DATA_BACKUP, "r") as json_file:
            # The data structure is immediately converted to Python Lists/Dictionaries
            user_backup = json.load(json_file)
            return user_backup

    else:
        print(
            f"{colorama.Fore.GREEN}User request was successful. Using the '{USER_DATA_OUTPUT_FILE}' file"
        )
        print(f"{colorama.Style.RESET_ALL}")

        with open(USER_DATA_OUTPUT_FILE, "r") as json_file:
            # The data structure is immediately converted to Python Lists/Dictionaries
            successful_data = json.load(json_file)
            return successful_data


def load(df, table_name, db_path):
    # Load the DataFrame to SQL
    with sqlite3.connect(db_path) as conn:
        df.to_sql(
            name=table_name,  # 1. The name of the table to create
            con=conn,  # 2. The active database connection
            if_exists="replace",  # 3. What to do if the table already exists (fail,replace, append)
            index=False,  # Prevent pandas from writing the DataFrame index as a column
        )
        print(f"{colorama.Fore.GREEN}Data loaded successfully into '{db_path}'!")
        print(f"{colorama.Style.RESET_ALL}")


def main(source, table_name, db_path):

    # Obtain a dataframe from the extract function and save it onto variable 'response'
    response = extract(source)

    # Store transformed data onto variable "transformed_data"
    transformed_data = transform(response)

    # Save(persist) data
    load(transformed_data, table_name, db_path)


if __name__ == "__main__":
    parser = get_args()
    args = parser.parse_args()
    main(args.source, args.table, args.db_path)
