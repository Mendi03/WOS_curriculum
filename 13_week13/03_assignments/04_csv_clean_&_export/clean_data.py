import pandas as pd


# df.info()


# Rename columns:
def rename_columns(df: pd.DataFrame):
    name_map = {
        f"{df.columns[0]}": "item_id",
        f"{df.columns[1]}": "category_name",
        f"{df.columns[2]}": "unit_price_usd",
        f"{df.columns[3]}": "quantity_in_stock",
        f"{df.columns[4]}": "date_created",
    }

    df.rename(columns=name_map, inplace=True)


# Clean category column:
def clean_column(df: pd.DataFrame):
    df["category_name"] = df["category_name"].str.strip().str.lower()
    # print(df.head())


def save_to_csv(df: pd.DataFrame):
    df.to_csv("cleaned_transactions.csv", index=False, encoding="utf-8")


if __name__ == "__main__":
    # Extract data
    df = pd.read_csv("./messy_inventory.csv")
    print("Before".center(80, "-"))
    print(df.head())

    # Transform data
    rename_columns(df)
    clean_column(df)

    # Load data
    print("After".center(80, "-"))
    print(df.head())

    save_to_csv(df)
