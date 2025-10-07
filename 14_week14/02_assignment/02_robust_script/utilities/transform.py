import logging
import pandas as pd
import colorama
import os

NULL_VALUES = ["", " ", "N/A", "none", "null", None, "undefined"]

WORKING_DIRECTORY = os.path.dirname(os.path.abspath(__file__))

print(WORKING_DIRECTORY)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    filename=os.path.join(
        WORKING_DIRECTORY, "pipeline_log.log"
    ),  # Directs all output to this file
)


def transform(data: dict) -> pd.DataFrame:
    """Returns dataframe with brawlers that are high level but have low trophies"""
    logging.info(f"Applying transform to dataframe.")

    brawlers = clean_data(data)

    # 1 - Finding what brawlers should be played more

    should_play = brawlers[(brawlers["power"] >= 10) & (brawlers["trophies"] <= 700)]

    # 2 - Sort
    should_play = should_play.sort_values(by=["trophies"], ascending=[True])

    logging.info(f"Successfully transformed data.")
    print(
        f"{colorama.Fore.GREEN}Successfully transformed data{colorama.Style.RESET_ALL}"
    )

    return should_play


def transform2(data: dict) -> pd.DataFrame:
    """Returns dataframe with brawlers that have been played the most and are above level 10"""
    logging.info(f"Applying transform2 to dataframe.")
    brawlers = clean_data(data)

    fav_brawlers = brawlers[(brawlers["power"] >= 10) & (brawlers["trophies"] >= 800)]

    # Sort
    fav_brawlers = fav_brawlers.sort_values(by=["trophies"], ascending=[False])

    logging.info(f"Successfully transformed data.")
    print(
        f"{colorama.Fore.GREEN}Successfully transformed data{colorama.Style.RESET_ALL}"
    )

    return fav_brawlers


def transform3(data: dict):
    """
    Returns brawlers above level 9 and that have no star power
    """
    logging.info(f"Applying transform3 to dataframe.")
    brawlers = clean_data(data)

    should_play = brawlers[
        (brawlers["power"] >= 9) & (brawlers["star_power_count"] == 0)
    ]

    # Sort
    should_play = should_play.sort_values(by=["trophies"], ascending=[True])

    logging.info(f"Successfully transformed data.")
    print(
        f"{colorama.Fore.GREEN}Successfully transformed data{colorama.Style.RESET_ALL}"
    )

    return should_play


# Helper function
def clean_data(data: dict) -> pd.DataFrame:
    # 1 - Clean columns
    logging.warning(f"Cleaning columns...")
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
    logging.warning(f"Transforming Star Power column...")
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
    logging.warning(f"Transforming Gadgets column...")
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

    return brawlers
