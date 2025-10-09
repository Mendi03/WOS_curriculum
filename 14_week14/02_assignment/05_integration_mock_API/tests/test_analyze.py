import sqlite3
import pandas as pd
from typing import Callable, TypeAlias
from analyze import (
    compute_total_post_tax,
    get_top_spender_post_tax,
    summarize_per_cart_post_tax,
)
import pytest

SeedDB: TypeAlias = Callable[[str, pd.DataFrame], str]


@pytest.fixture
def seed_db(tmp_path) -> SeedDB:
    """Create a temp DB and return a helper that seeds tables from DataFrames."""
    db_file = tmp_path / "test.db"

    def _seed(table_name: str, df: pd.DataFrame) -> str:
        with sqlite3.connect(db_file) as conn:
            df.to_sql(table_name, conn, if_exists="replace", index=False)
        return str(db_file)

    return _seed


def test_compute_total_post_tax_with_small_dataset(tmp_path):
    # Arrange — build a temporary SQLite DB and seed known data
    db_file = tmp_path / "test.db"
    df = pd.DataFrame(
        {
            "user_id": [1, 2],
            "discounted_total": [100.00, 50.00],
        }
    )
    with sqlite3.connect(db_file) as conn:
        df.to_sql("carts", conn, if_exists="replace", index=False)

    # Act — compute 10% tax on the subtotal (150.00 → 165.00)
    result = compute_total_post_tax(str(db_file), "carts", tax_rate=0.10)

    # Assert
    assert result == 165.00


def test_get_top_spender_post_tax_user_id_and_amount_match_expected(tmp_path):
    """returns the correct user_id and amount for a small dataset"""

    # Arrange
    db_file = tmp_path / "test.db"
    df = pd.DataFrame(
        {
            "user_id": [1, 1, 2],
            "discounted_total": [40.0, 30.0, 60.0],
        }
    )

    with sqlite3.connect(db_file) as conn:
        df.to_sql("carts", conn, if_exists="replace", index=False)

    # Act
    result = get_top_spender_post_tax(str(db_file), "carts", 0.1)

    # Assert
    assert result == (1, 77.0)


def test_summarize_per_cart_post_tax_is_correct(tmp_path):
    """Each cart total is correct and sorted properly."""

    db_file = tmp_path / "test.db"
    # Arrange
    df = pd.DataFrame(
        {
            "cart_id": [101, 101, 102, 103, 103, 103],
            "discounted_total": [10.0, 20.0, 40.0, 5.0, 5.0, 5.0],
        }
    )

    with sqlite3.connect(db_file) as conn:
        df.to_sql("carts", conn, if_exists="replace", index=False)

    # Act
    result = summarize_per_cart_post_tax(db_file, "carts", tax_rate=0.1)

    # Assert
    assert result == [(101, 33.0), (102, 44.0), (103, 16.5)]


def test_total_with_fixture(seed_db):
    # Arrange
    df = pd.DataFrame({"discounted_total": [10.0, 5.0]})
    db = seed_db("carts", df)

    # Act
    result = compute_total_post_tax(db, "carts", tax_rate=0.10)

    # Assert
    assert result == 16.50


def test_get_top_spender_post_tax_user_id_and_amount_match_expected_with_fixture(
    seed_db,
):
    """returns the correct user_id and amount for a small dataset"""

    # Arrange
    df = pd.DataFrame(
        {
            "user_id": [1, 1, 2],
            "discounted_total": [40.0, 30.0, 60.0],
        }
    )

    db = seed_db("carts", df)

    # Act
    result = get_top_spender_post_tax(db, "carts", 0.1)

    # Assert
    assert result == (1, 77.0)


def test_summarize_per_cart_post_tax_is_correct_with_fixture(seed_db: SeedDB):
    """Each cart total is correct and sorted properly."""

    # Arrange
    df = pd.DataFrame(
        {
            "cart_id": [101, 101, 102, 103, 103, 103],
            "discounted_total": [10.0, 20.0, 40.0, 5.0, 5.0, 5.0],
        }
    )

    db_file = seed_db("carts", df)

    # Act
    result = summarize_per_cart_post_tax(db_file, "carts", tax_rate=0.1)

    # Assert
    assert result == [(101, 33.0), (102, 44.0), (103, 16.5)]
