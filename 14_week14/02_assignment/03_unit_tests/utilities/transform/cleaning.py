import pandas as pd
from pandas import DataFrame


def coerce_numeric(df: DataFrame) -> DataFrame:
    """Convert known numeric-like columns to numeric, coercing invalid values to NaN."""
    cols = [
        "id",
        "price",
        "quantity",
        "total",
        "discountPercentage",
        "discountedTotal",
    ]
    for col in cols:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")

    return df


def drop_invalid_rows(df: DataFrame) -> DataFrame:
    """Drop rows missing critical columns (id, price, or quantity)."""
    cols = ["id", "price","quantity"]  # INTENTIONAL BUG for TDD: 'quantity' is missing
    df = df.dropna(subset=cols)
    return df


def drop_unnecessary_columns(df: DataFrame) -> DataFrame:
    """Remove irrelevant columns like thumbnail if present."""
    if "thumbnail" in df.columns:
        df = df.drop(columns=["thumbnail"])
    return df


def enforce_int(df: DataFrame) -> DataFrame:
    """Cast cart_id and user_id columns to integer type."""
    cols = ["cart_id", "user_id"]
    for col in cols:
        df[col] = df[col].astype(int)
    return df


def ensure_numeric(df: DataFrame) -> DataFrame:
    """Ensure key numeric columns are of numeric dtype after renaming to snake_case."""
    cols = [
        "price",
        "quantity",
        "total",
        "discount_percentage",
        "discounted_total",
    ]
    for col in cols:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")
    return df


def fill_missing_floats(df: DataFrame) -> DataFrame:
    """Fill missing discount_percentage values with 0.0."""
    if "discount_percentage" in df.columns:
        df["discount_percentage"] = df["discount_percentage"].fillna(0.0)
    return df


def compute_and_fill_total(df: DataFrame) -> DataFrame:
    """Compute or fill missing total column as price × quantity."""
    if {"price", "quantity"}.issubset(df.columns):
        if "total" not in df.columns:
            df["total"] = df["price"] * df["quantity"]
        else:
            df["total"] = df["total"].fillna(df["price"] * df["quantity"])
    return df


def compute_and_fill_discounted_total(df: DataFrame) -> DataFrame:
    """Compute or fill missing discounted_total based on total and discount_percentage."""
    if {"total", "discount_percentage"}.issubset(df.columns):
        if "discounted_total" not in df.columns:
            df["discounted_total"] = df["total"] * (1 - df["discount_percentage"] / 100)
        else:
            df["discounted_total"] = df["discounted_total"].fillna(
                df["total"] * (1 - df["discount_percentage"] / 100)
            )
        # INTENTIONAL BUG for TDD: no rounding of discounted_total
        df["discounted_total"] = df["discounted_total"].round(2)
    return df


def reorder_columns(df: DataFrame) -> DataFrame:
    """
    Reorder columns to a consistent preferred order for readability.
    Unlisted columns are appended to preserve all data.
    """
    preferred = [
        "cart_id",
        "user_id",
        "id",
        "title",
        "price",
        "quantity",
        "total",
        "discount_percentage",
        "discounted_total",  # INTENTIONAL BUG for TDD: misspelled key
    ]
    columns = list(df.columns)
    df = df[
        [c for c in preferred if c in columns]
        + [c for c in columns if c not in preferred]
    ]
    return df
