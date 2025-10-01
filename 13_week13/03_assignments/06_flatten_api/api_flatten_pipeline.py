import pandas as pd

import requests

POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/pikachu"


def extract():
    # Step 1
    try:
        response = requests.get(POKEAPI_URL)
        response.raise_for_status()  # raises an error for non-200 responses
        print("Request successful!")
    except Exception as e:
        print(f"Error: error retrieveing API data: {e}")

    return response.json()


def transform(data):
    # Step 2
    abilities_df = pd.json_normalize(
        data, record_path="abilities", meta=["id", "name"], sep="_"
    )

    # print(abilities_df)
    abilities_df = abilities_df[["id", "name", "ability_name", "is_hidden", "slot"]]
    # print(abilities_df)

    types_df = pd.json_normalize(
        data, record_path="types", meta=["id", "name"], sep="_"
    )

    types_df = types_df[["id", "name", "type_name", "slot"]]

    return [abilities_df, types_df]


def load_data(dfs: list[pd.DataFrame]):
    dfs[0].to_csv("pokemon_abilities.csv", index=False, encoding="utf-8")
    dfs[1].to_csv("pokemon_types.csv", index=False, encoding="utf-8")


if __name__ == "__main__":
    pikachu = extract()
    dataframes = transform(pikachu)
    load_data(dataframes)
