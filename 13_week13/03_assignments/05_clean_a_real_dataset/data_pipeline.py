import numpy as np
import pandas as pd


def extract(filepath: str):
    # Got help from Dan
    # df = pd.read_csv(filepath, na_values=[" "])
    df = pd.read_csv(filepath)
    return df


def transform(df: pd.DataFrame):
    # Rename columns
    name_map = {
        f"{df.columns[0]}": "order_id",
        f"{df.columns[1]}": "customer_email",
        f"{df.columns[2]}": "product_name",
        f"{df.columns[3]}": "price_usd",
        f"{df.columns[4]}": "region",
        f"{df.columns[5]}": "status",
        f"{df.columns[6]}": "discount_applied",
        f"{df.columns[7]}": "date",
    }

    df.rename(columns=name_map, inplace=True)

    # Remove white spaces for the columns and turn them into lowercase
    df["customer_email"] = df["customer_email"].str.strip().str.lower()
    df["region"] = df["region"].str.strip().str.lower()
    df["status"] = df["status"].str.strip().str.upper()

    # Drop duplicates
    df.drop_duplicates(subset=["order_id"], keep="first", inplace=True)

    # Drop rows with missing price_usd:
    # print(df)
    df["price_usd"].replace(" ", np.nan, inplace=True)
    # print(df)
    df.dropna(subset=["price_usd"], inplace=True)

    # Fill any missing values in the discount_applied column with a safe value of 0.0
    df["discount_applied"].replace(" ", np.nan, inplace=True)
    df["discount_applied"].fillna(0.0, inplace=True)
    # print(df)

    # Find all COMPLETED orders located in the 'east' region
    # that had a unit price greater than $100.00,
    # and sort them by price in descending order.

    df["price_usd"] = pd.to_numeric(df["price_usd"], downcast="float", errors="coerce")
    # print(df.head())
    # df.info()
    df = df.loc[
        (df["region"] == "east")
        & (df["price_usd"] > 100.0)
        & (df["status"] == "COMPLETED")
    ]

    # Changed a value to be greater (301) becasue both were the same
    df = df.sort_values(by=["price_usd"], ascending=([False]))
    return df
    # print(df)


def load(df):
    df.to_csv("cleaned_transactions.csv", index=False, encoding="utf-8")


if __name__ == "__main__":
    df = extract("./raw_sales_data.csv")
    # df.info()
    df = transform(df)
    load(df)
    print(df)
    # print(df.columns)
