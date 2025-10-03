import pandas as pd
import requests
import sqlite3

DUMMYAPI_URL = "https://dummyjson.com/products"
DATABASE_FILE = "product_data.db"


def extract():
    """Fetches data from the API and returns the
    list of products (the 'products' key)."""
    # Use the requests library here
    # Remember the API response contains {'products': [...], 'total': 100, ...}

    try:
        response = requests.get(DUMMYAPI_URL)
        response.raise_for_status()  # raises an error for non-200 responses
        print("Request successful!")
    except Exception as e:
        print(f"Error: error retrieveing API data: {e}")

    return response.json()


def transform(product_list):
    """Flattens the product list and selects/cleans key fields."""
    # Use pandas.json_normalize() here
    df = pd.json_normalize(product_list, record_path="products", sep="_")
    # Dropped tags because it is a list and sqlite will throw error
    df = df.drop(columns=["reviews", "images", "thumbnail"])

    df["tags"] = df["tags"].str.join(", ")
    print(df.info())

    return df


def load(df):
    """Loads the final DataFrame into a SQLite database table."""
    # Use sqlite3.connect() and df.to_sql() here
    with sqlite3.connect(DATABASE_FILE) as conn:
        # Use .to_sql() to create a table named 'inventory' and insert all data
        df.to_sql(
            name="inventory",  # 1. The name of the table to create
            con=conn,  # 2. The active database connection
            if_exists="replace",  # 3. What to do if the table already exists (fail,replace, append)
            index=False,  # Prevent pandas from writing the DataFrame index as a column
        )

        print("Data loaded successfully!")

        # cursor = conn.cursor()

        # # Select all rows from the newly created table
        # cursor.execute("SELECT * FROM inventory;")

        # # Fetch all results
        # rows = cursor.fetchall()

        # print(f"Total rows in database: {len(rows)}")
        # print(rows)


if __name__ == "__main__":
    # Call your functions in sequence: E -> T -> L
    products = extract()
    df = transform(products)
    load(df)
