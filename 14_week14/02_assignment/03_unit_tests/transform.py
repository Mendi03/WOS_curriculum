import pandas as pd
from utilities import camel_to_snake
from utilities.transform import (
    coerce_numeric,
    compute_and_fill_discounted_total,
    compute_and_fill_total,
    drop_invalid_rows,
    drop_unnecessary_columns,
    enforce_int,
    ensure_numeric,
    fill_missing_floats,
    flatten,
    reorder_columns,
)


def transform(cart: dict) -> pd.DataFrame:
    """Flatten a DummyJSON cart into product rows, enforce types, and compute totals."""

    df = flatten(cart)
    df = coerce_numeric(df)
    df = drop_invalid_rows(df)
    df = drop_unnecessary_columns(df)

    df.columns = [camel_to_snake(col) for col in df.columns]

    df = enforce_int(df)
    df = ensure_numeric(df)
    df = fill_missing_floats(df)
    df = compute_and_fill_total(df)
    df = compute_and_fill_discounted_total(df)
    df = reorder_columns(df)

    return df
