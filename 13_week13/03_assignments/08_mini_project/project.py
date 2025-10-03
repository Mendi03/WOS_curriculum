import json
import sqlite3
import pandas as pd
import requests
import pprint
import os
from dotenv import load_dotenv
import requests
import colorama

# API URL Requests
USER_DATA_REQUEST = "https://api.brawlstars.com/v1/players/%23QGY0C2GV"
# BRAWLER_DATA_REQUEST = "https://api.brawlstars.com/v1/brawlers?limit=100"

# Storage for succesful API responses
USER_DATA_OUTPUT_FILE = "./data/my_data.json"
# BRAWLERS_OUTPUT_FILE = "./data/brawlers.json"

# Backups
MY_DATA_BACKUP = "./data/my_brawler_data.json"
# BRAWLER_DATA_BACKUP = "./data/brawlers_backup.json"

NULL_VALUES = ["", " ", "N/A", "none", "null", None, "undefined"]

DATABASE_FILE = "user_brawlers.db"
DATABASE_FILE2 = "fav_brawlers.db"

# SETUP for API_KEY
load_dotenv()

# 2. Access the variables using os.environ
API_KEY = os.environ.get("API_KEY")

# Check if the key was loaded (always good practice!)
if not API_KEY:
    raise EnvironmentError("API_KEY not found in .env file.")


def response_into_json(url: str, output_file: str) -> bool:
    try:
        headers = {"Authorization": f"Bearer {API_KEY}"}
        response = requests.get(USER_DATA_REQUEST, headers=headers)

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


def extract() -> list[dict]:
    data = []

    user_request_success = response_into_json(USER_DATA_REQUEST, USER_DATA_OUTPUT_FILE)

    if user_request_success == False:
        print(
            f"{colorama.Fore.RED}User request failed. Using the '{MY_DATA_BACKUP}' file instead"
        )
        print(f"{colorama.Style.RESET_ALL}")

        with open(MY_DATA_BACKUP, "r") as json_file:
            # The data structure is immediately converted to Python Lists/Dictionaries
            user_backup = json.load(json_file)
            data.append(user_backup)

    else:
        print(
            f"{colorama.Fore.GREEN}User request was successful. Using the '{USER_DATA_OUTPUT_FILE}' file"
        )
        print(f"{colorama.Style.RESET_ALL}")

        with open(USER_DATA_OUTPUT_FILE, "r") as json_file:
            # The data structure is immediately converted to Python Lists/Dictionaries
            successful_data = json.load(json_file)
            data.append(successful_data)

    return data


def transform(data: dict):
    # Step 2
    # Clean columns
    brawlers = pd.json_normalize(data, record_path="brawlers", sep="_")

    name_map = {
        f"{brawlers.columns[0]}": "id",
        f"{brawlers.columns[1]}": "name",
        f"{brawlers.columns[2]}": "power",
        f"{brawlers.columns[3]}": "rank",
        f"{brawlers.columns[4]}": "trophies",
        f"{brawlers.columns[5]}": "highest_trophies",
        f"{brawlers.columns[6]}": "gears",
        f"{brawlers.columns[7]}": "collected_star_powers",
        f"{brawlers.columns[8]}": "collected_gadgets",
    }

    brawlers.rename(columns=name_map, inplace=True)
    brawlers = brawlers.drop(columns=["gears"])

    # Clean/Transform Star Power column (Added the star_power column and changed collected_star_powers column):
    brawlers["star_power_count"] = (
        brawlers["collected_star_powers"].apply(len).fillna(0).astype(int)
    )

    brawlers["collected_star_powers"] = brawlers["collected_star_powers"].apply(
        lambda cell: (
            ", ".join([sp.get("name") for sp in cell]) if len(cell) > 0 else " "
        )
    )
    # Can directly replace with string
    brawlers["collected_star_powers"].replace(NULL_VALUES, "--N/A--", inplace=True)
    # brawlers["collected_star_powers"].fillna("--N/A--", inplace=True)

    # Clean/Transform Gadgets column:
    brawlers["gadget_count"] = (
        brawlers["collected_gadgets"].apply(len).fillna(0).astype(int)
    )

    brawlers["collected_gadgets"] = brawlers["collected_gadgets"].apply(
        lambda cell: (
            ", ".join([sp.get("name") for sp in cell]) if len(cell) > 0 else " "
        )
    )
    brawlers["collected_gadgets"].replace(NULL_VALUES, "--N/A--", inplace=True)
    # brawlers["collected_gadgets"].fillna("--N/A--", inplace=True)

    # Finding what brawlers should be played more

    should_play = brawlers[(brawlers["power"] >= 10) & (brawlers["trophies"] <= 700)]

    # Sort
    should_play = should_play.sort_values(by=["trophies"], ascending=[True])

    print(f"{colorama.Fore.GREEN}Successfully transformed data")
    print(f"{colorama.Style.RESET_ALL}")

    return should_play


def transform2(data: dict):
    # Step 2
    # Clean columns
    brawlers = pd.json_normalize(data, record_path="brawlers", sep="_")

    name_map = {
        f"{brawlers.columns[0]}": "id",
        f"{brawlers.columns[1]}": "name",
        f"{brawlers.columns[2]}": "power",
        f"{brawlers.columns[3]}": "rank",
        f"{brawlers.columns[4]}": "trophies",
        f"{brawlers.columns[5]}": "highest_trophies",
        f"{brawlers.columns[6]}": "gears",
        f"{brawlers.columns[7]}": "collected_star_powers",
        f"{brawlers.columns[8]}": "collected_gadgets",
    }

    brawlers.rename(columns=name_map, inplace=True)
    brawlers = brawlers.drop(columns=["gears"])

    # Clean/Transform Star Power column (Added the star_power column and changed collected_star_powers column):
    brawlers["star_power_count"] = (
        brawlers["collected_star_powers"].apply(len).fillna(0).astype(int)
    )

    brawlers["collected_star_powers"] = brawlers["collected_star_powers"].apply(
        lambda cell: (
            ", ".join([sp.get("name") for sp in cell]) if len(cell) > 0 else " "
        )
    )
    # Can directly replace with string
    brawlers["collected_star_powers"].replace(NULL_VALUES, "--N/A--", inplace=True)
    # brawlers["collected_star_powers"].fillna("--N/A--", inplace=True)

    # Clean/Transform Gadgets column:
    brawlers["gadget_count"] = (
        brawlers["collected_gadgets"].apply(len).fillna(0).astype(int)
    )

    brawlers["collected_gadgets"] = brawlers["collected_gadgets"].apply(
        lambda cell: (
            ", ".join([sp.get("name") for sp in cell]) if len(cell) > 0 else " "
        )
    )
    brawlers["collected_gadgets"].replace(NULL_VALUES, "--N/A--", inplace=True)
    # brawlers["collected_gadgets"].fillna("--N/A--", inplace=True)

    # Finding favorite brawlers

    fav_brawlers = brawlers[(brawlers["power"] >= 10) & (brawlers["trophies"] >= 800)]

    # Sort
    fav_brawlers = fav_brawlers.sort_values(by=["trophies"], ascending=[False])

    print(f"{colorama.Fore.GREEN}Successfully transformed data")
    print(f"{colorama.Style.RESET_ALL}")

    return fav_brawlers


def load(df):
    # Load the DataFrame to SQL
    with sqlite3.connect(DATABASE_FILE2) as conn:
        # Use .to_sql() to create a table named 'products' and insert all data
        df.to_sql(
            name="user_brawlers",  # 1. The name of the table to create
            con=conn,  # 2. The active database connection
            if_exists="replace",  # 3. What to do if the table already exists (fail,replace, append)
            index=False,  # Prevent pandas from writing the DataFrame index as a column
        )
        print("Data loaded successfully!")


if __name__ == "__main__":
    responses = extract()
    # print(pprint.pp(response))
    # brawler data
    # b_data = transform(responses[0])

    # fav_brawlers = transform2(responses[0])

    load(b_data)
    # load(fav_brawlers)
