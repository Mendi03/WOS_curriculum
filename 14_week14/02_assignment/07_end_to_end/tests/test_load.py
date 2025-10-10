import sqlite3
from typing import Callable, TypeAlias
import pandas as pd
import pytest
from load import load

SeedDB: TypeAlias = Callable[[str, pd.DataFrame], str]


@pytest.fixture
def seed_db(tmp_path) -> SeedDB:
    """Create a temp DB and return a helper that seeds tables from DataFrames."""
    db_file = tmp_path / "test.db"

    df = pd.DataFrame(
        {
            "user_id": [100, 200],
            "discounted_total": [525.50, 85.75],
            "id": [56, 534],
            "title": ["Book", "Phone"],
            "price": [9.99, 1000.99],
            "name": ["cas", "F"],
        }
    )

    def _seed(table_name: str) -> str:
        with sqlite3.connect(db_file) as conn:
            df.to_sql(table_name, conn, if_exists="replace", index=False)
        return str(db_file)

    return _seed


def test_load_creates_table_and_writes_rows(tmp_path):
    # Arrange
    db = tmp_path / "test.db"
    df = pd.DataFrame(
        {
            "user_id": [1, 2],
            "discounted_total": [120.50, 80.75],
        }
    )

    # Act
    load(df, str(db), "carts")

    # Assert
    with sqlite3.connect(db) as conn:
        (row_count,) = conn.execute("SELECT COUNT(*) FROM carts").fetchone()
    assert row_count == 2


def test_load_creates_expected_columns(tmp_path):
    db = tmp_path / "test.db"
    df = pd.DataFrame({"id": [1], "title": ["Book"], "price": [9.99]})

    load(df, str(db), "products")

    with sqlite3.connect(db) as conn:
        print(conn.execute(f"PRAGMA table_info('products')").fetchall())
        cols = [c[1] for c in conn.execute("PRAGMA table_info(products)").fetchall()]
    assert {"id", "title", "price"}.issubset(set(cols))


def test_load_overwrites_or_appends(tmp_path):
    db = tmp_path / "test.db"
    df1 = pd.DataFrame({"id": [1], "name": ["A"]})
    df2 = pd.DataFrame({"id": [2], "name": ["B"]})

    load(df1, str(db), "users")
    load(df2, str(db), "users")  # Update test to match your if_exists mode

    with sqlite3.connect(db) as conn:
        (rows,) = conn.execute("SELECT COUNT(*) FROM users").fetchone()

    # If using append, assert rows == 2. If replace, assert rows == 1.
    assert rows in (1, 2)


def test_load_creates_table_and_writes_rows_with_fixture(seed_db):
    # Arrange
    table_name = "carts"
    db = seed_db(table_name)

    df = pd.DataFrame(
        {
            "user_id": [1, 2],
            "discounted_total": [120.50, 80.75],
        }
    )

    # Act
    load(df, str(db), table_name)

    # Assert
    with sqlite3.connect(db) as conn:
        (row_count,) = conn.execute(f"SELECT COUNT(*) FROM {table_name}").fetchone()
    assert row_count == 4


def test_load_creates_expected_columns_with_fixture(seed_db):

    table_name = "products"
    db = seed_db(table_name)

    df = pd.DataFrame({"id": [1], "title": ["Book"], "price": [9.99]})
    load(df, str(db), table_name)

    with sqlite3.connect(db) as conn:
        cols = [
            c[1] for c in conn.execute(f"PRAGMA table_info({table_name})").fetchall()
        ]
        print(cols)
    assert {"id", "title", "price"}.issubset(set(cols))


def test_load_overwrites_or_appends_with_fixture(seed_db):
    table_name = "users"
    db = seed_db(table_name)
    df1 = pd.DataFrame({"id": [1], "name": ["A"]})
    df2 = pd.DataFrame({"id": [2], "name": ["B"]})

    load(df1, str(db), table_name)
    load(df2, str(db), table_name)  # Update test to match your if_exists mode

    with sqlite3.connect(db) as conn:
        (rows,) = conn.execute(f"SELECT COUNT(*) FROM {table_name}").fetchone()

    # If using append, assert rows == 2. If replace, assert rows == 1.
    assert rows in (1, 4)
