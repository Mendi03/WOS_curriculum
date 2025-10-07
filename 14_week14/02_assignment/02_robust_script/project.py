import json
import sqlite3
import pandas as pd
import requests
import pprint
import os
import requests
import colorama
import argparse
import logging

from dotenv import load_dotenv
from utilities.transform import transform

# API URL Requests
# USER_DATA_REQUEST = "https://api.brawlstars.com/v1/players/%23QGY0C2GV"

WORKING_DIRECTORY = os.path.dirname(os.path.abspath(__file__))
print(f"Path in project.py: {WORKING_DIRECTORY}")

# Storage for succesful API responses
USER_DATA_OUTPUT_FILE = os.path.join(WORKING_DIRECTORY, "data", "data.json")

# Backups
MY_DATA_BACKUP = os.path.join(WORKING_DIRECTORY, "data", "backup_data.json")

# SETUP for API_KEY
load_dotenv()

# 2. Access the variables using os.environ
API_KEY = os.environ.get("API_KEY")

# Check if the key was loaded (always good practice!)
if not API_KEY:
    raise EnvironmentError("API_KEY not found in .env file.")


# Configuration: Set the minimum level to INFO, and write to a file
# The format ensures we get a timestamp and the log level prefix
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    filename=os.path.join(
        WORKING_DIRECTORY, "pipeline_log.log"
    ),  # Directs all output to this file
)


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
            logging.error(
                f"Request Failed. Response Status Code: {response.status_code}"
            )
            print(
                f"{colorama.Fore.RED}Request Failed. Response Status Code: {response.status_code}{colorama.Style.RESET_ALL}"
            )
            # print(f"{colorama.Style.RESET_ALL}")
            return False

        # Changes successful response into a data type of .json (dictionary)
        response = response.json()

        # Saves response to output file
        with open(output_file, "w") as outfile:
            json.dump(response, outfile, indent=4)

        return True
    except requests.exceptions.RequestException as e:
        logging.critical(
            f"FATAL EXTRACTION ERROR: Network or API failure for {url}. Details: {e}"
        )
        return False
    except Exception as e:
        print(f"Error: error retrieveing API data: {e}")


def extract(source: str) -> dict:
    logging.info(f"Extracting data from '{source}'")
    user_request_success = response_into_json(source, USER_DATA_OUTPUT_FILE)

    if user_request_success == False:
        print(
            f"{colorama.Fore.RED}User request failed. Using the '{MY_DATA_BACKUP}' file instead{colorama.Style.RESET_ALL}"
        )

        with open(MY_DATA_BACKUP, "r") as json_file:
            # The data structure is immediately converted to Python Lists/Dictionaries
            user_backup = json.load(json_file)
            return user_backup

    else:
        print(
            f"{colorama.Fore.GREEN}User request was successful. Using the '{USER_DATA_OUTPUT_FILE}' file{colorama.Style.RESET_ALL}"
        )

        with open(USER_DATA_OUTPUT_FILE, "r") as json_file:
            # The data structure is immediately converted to Python Lists/Dictionaries
            successful_data = json.load(json_file)

        logging.info(
            f"API call successful. Saved response to '{USER_DATA_OUTPUT_FILE}'"
        )
        return successful_data


def load(df, table_name, db_path):
    # Load the DataFrame to SQL
    try:
        logging.info(f"Saving data onto'{db_path}'")
        with sqlite3.connect(db_path) as conn:
            df.to_sql(
                name=table_name,  # 1. The name of the table to create
                con=conn,  # 2. The active database connection
                if_exists="replace",  # 3. What to do if the table already exists (fail,replace, append)
                index=False,  # Prevent pandas from writing the DataFrame index as a column
            )
            logging.info(
                f"API call successful. Saved response to '{USER_DATA_OUTPUT_FILE}'"
            )
            print(
                f"{colorama.Fore.GREEN}Data loaded successfully into '{db_path}'!{colorama.Style.RESET_ALL}"
            )
    except Exception as e:
        logging.error(
            f"DATABASE ERROR: Data could not be stored to the database. Details: {e}"
        )
        print(f"DATABASE ERROR: Data could not be stored to the database. Details: {e}")


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
