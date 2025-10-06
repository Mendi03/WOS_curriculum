import pandas as pd
import colorama

NULL_VALUES = ["", " ", "N/A", "none", "null", None, "undefined"]


def transform(data: dict) -> pd.DataFrame:
    """Returns dataframe with brawlers that are high level but have low trophies"""
    brawlers = clean_data(data)

    # 1 - Finding what brawlers should be played more

    should_play = brawlers[(brawlers["power"] >= 10) & (brawlers["trophies"] <= 700)]

    # 2 - Sort
    should_play = should_play.sort_values(by=["trophies"], ascending=[True])

    print(f"{colorama.Fore.GREEN}Successfully transformed data")
    print(f"{colorama.Style.RESET_ALL}")

    return should_play


def transform2(data: dict) -> pd.DataFrame:
    """Returns dataframe with brawlers that have been played the most and are above level 10"""
    brawlers = clean_data(data)

    fav_brawlers = brawlers[(brawlers["power"] >= 10) & (brawlers["trophies"] >= 800)]

    # Sort
    fav_brawlers = fav_brawlers.sort_values(by=["trophies"], ascending=[False])

    print(f"{colorama.Fore.GREEN}Successfully transformed data")
    print(f"{colorama.Style.RESET_ALL}")

    return fav_brawlers


def transform3(data: dict):
    """
    Returns brawlers above level 9 and have no star power
    """
    brawlers = clean_data(data)

    should_play = brawlers[
        (brawlers["power"] >= 9) & (brawlers["star_power_count"] == 0)
    ]

    # Sort
    should_play = should_play.sort_values(by=["trophies"], ascending=[True])

    print(f"{colorama.Fore.GREEN}Successfully transformed data")
    print(f"{colorama.Style.RESET_ALL}")

    return should_play


# Helper function
def clean_data(data: dict) -> pd.DataFrame:
    # 1 - Clean columns
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

    return brawlers
