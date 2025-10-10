"""Provides the flatten() function to normalize cart JSON into a tabular DataFrame."""

import pandas as pd


def flatten(cart: dict) -> pd.DataFrame:
    """Normalize a DummyJSON cart into one row per product with cart and user metadata."""
    cart_id = cart.get("id")
    cart = {**cart, "cart_id": cart_id}

    df = pd.json_normalize(
        cart, record_path="products", meta=["cart_id", "userId"], sep="_"
    )

    return df
