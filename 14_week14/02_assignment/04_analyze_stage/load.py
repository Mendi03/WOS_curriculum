import sqlite3
import pandas as pd
from utilities.console import error, info, success


def load(df: pd.DataFrame, db_file: str, table_name: str) -> None:
    """Load the transformed cart DataFrame into a SQLite database."""
    if df.empty:
        print(error("No data to load."))
        return

    conn = None
    try:
        print(info(f"Loading {len(df)} records into '{table_name}' table..."))
        conn = sqlite3.connect(db_file)
        df.to_sql(table_name, conn, if_exists="append", index=False)
        conn.commit()
        print(success(f"Loaded {len(df)} records into '{table_name}' table."))
    except Exception as e:
        print(error(f"Error loading data: {e}"))
    finally:
        if conn:
            conn.close()
