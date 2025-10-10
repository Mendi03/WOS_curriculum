import argparse
from argparse import Namespace
from typing import cast


class PipelineArgs(Namespace):
    """Typed namespace for the carts ETL pipeline command-line arguments.

    Attributes:
        db_file (str): Path to the SQLite database file.
        table_name (str): Name of the table to write or query in the database.
        base_url (str): Base URL of the API endpoint.
        resource (str): Specific resource to request (e.g., 'carts/').
        id (int): Identifier for the resource to fetch.
    """

    db_file: str
    table_name: str
    base_url: str
    resource: str
    id: int


def parse_args() -> PipelineArgs:
    """Command-line argument parser for the carts ETL pipeline."""
    parser = argparse.ArgumentParser(
        description=(
            "ETL Pipeline CLI for querying the DummyJSON API and writing results to SQLite.\n"
            "\nExample usage:\n"
            "  python pipeline.py --resource carts --id 2 --db-file ./data/products.db\n"
        )
    )
    parser.add_argument(
        "--db-file",
        type=str,
        default="./data/products.db",
        help="Path to the SQLite database file",
    )
    parser.add_argument(
        "--table-name",
        type=str,
        default="products",
        help="Name of the table to query",
    )
    parser.add_argument(
        "--base-url",
        type=str,
        default="https://dummyjson.com/",
        help="Base URL of API",
    )
    parser.add_argument(
        "--resource",
        type=str,
        default="carts/",
        help="Resource to request",
    )
    parser.add_argument(
        "--id",
        type=int,
        default=1,
        help="ID of cart/resource to request",
    )
    args = parser.parse_args(namespace=PipelineArgs())
    return cast(PipelineArgs, args)
