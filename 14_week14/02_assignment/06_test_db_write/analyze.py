"""Business analysis helpers for the carts pipeline.

This module answers the Week 2 business questions using the data loaded
into SQLite by the pipeline. It intentionally has **no side effects** so
that students can unit test these functions deterministically.

Primary questions:
  1) What is the final total cost of all carts combined, including sales tax?
  2) Which user spent the most after tax, and how much?
"""

from __future__ import annotations

import sqlite3
from typing import Optional, Tuple
from utilities.console import error

DEFAULT_TAX_RATE = 0.075  # 7.5%


def compute_total_post_tax(
    db_file: str,
    table_name: str,
    tax_rate: float = DEFAULT_TAX_RATE,
) -> float:
    """Return the total post‑tax revenue across **all rows**.

    The transform step stores one row **per product** in a cart, with a
    per‑row ``discounted_total`` value. We sum those values and apply
    the sales tax as a final step.

    Args:
        db_file: Path to the SQLite database file (e.g., "./data/products.db").
        table_name: Name of the table containing transformed rows (e.g., "carts").
        tax_rate: Sales tax rate to apply (e.g., 0.075 for 7.5%).

    Returns:
        The total post‑tax amount rounded to two decimals. Returns 0.0 if no rows.
    """
    if tax_rate < 0:
        raise ValueError(error("tax_rate must be non‑negative"))

    conn: Optional[sqlite3.Connection] = None
    try:
        conn = sqlite3.connect(db_file)
        cur = conn.cursor()
        cur.execute(f"SELECT SUM(discounted_total) FROM {table_name};")
        row = cur.fetchone()
        subtotal = float(row[0]) if row and row[0] is not None else 0.0
        post_tax_total = round(subtotal * (1.0 + tax_rate), 2)
        return post_tax_total
    finally:
        if conn is not None:
            conn.close()


def get_top_spender_post_tax(
    db_file: str,
    table_name: str,
    tax_rate: float = DEFAULT_TAX_RATE,
) -> Optional[Tuple[int, float]]:
    """Return the (user_id, post_tax_total) for the highest‑spending user.

    This computes, per user, the sum of ``discounted_total`` and then applies
    the sales tax. If the table is empty, returns ``None``.

    Args:
        db_file: Path to the SQLite database file.
        table_name: Name of the table containing transformed rows.
        tax_rate: Sales tax rate (e.g., 0.075).

    Returns:
        A tuple of (user_id, post_tax_total_rounded) or ``None`` if no data.
    """
    if tax_rate < 0:
        raise ValueError(error("tax_rate must be non‑negative"))

    conn: Optional[sqlite3.Connection] = None
    try:
        conn = sqlite3.connect(db_file)
        cur = conn.cursor()
        cur.execute(
            f"""
            SELECT user_id, SUM(discounted_total) AS subtotal
            FROM {table_name}
            GROUP BY user_id
            ORDER BY subtotal DESC
            LIMIT 1;
            """
        )
        row = cur.fetchone()
        if not row:
            return None

        user_id, subtotal = int(row[0]), float(row[1] or 0.0)
        post_tax_total = round(subtotal * (1.0 + tax_rate), 2)
        return user_id, post_tax_total
    finally:
        if conn is not None:
            conn.close()


def summarize_per_cart_post_tax(
    db_file: str,
    table_name: str,
    tax_rate: float = DEFAULT_TAX_RATE,
) -> list[tuple[int, float]]:
    """Return a list of (cart_id, post_tax_total) pairs for each cart.

    Useful for tests that want deterministic per‑cart assertions. The list is
    ordered by ``cart_id`` ascending.
    """
    if tax_rate < 0:
        raise ValueError(error("tax_rate must be non‑negative"))

    conn: Optional[sqlite3.Connection] = None
    try:
        conn = sqlite3.connect(db_file)
        cur = conn.cursor()
        cur.execute(
            f"""
            SELECT cart_id, SUM(discounted_total) AS subtotal
            FROM {table_name}
            GROUP BY cart_id
            ORDER BY cart_id ASC;
            """
        )
        rows = cur.fetchall() or []
        return [
            (int(cart_id), round(float(subtotal or 0.0) * (1.0 + tax_rate), 2))
            for cart_id, subtotal in rows
        ]
    finally:
        if conn is not None:
            conn.close()
