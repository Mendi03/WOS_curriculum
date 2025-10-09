from config import get_vars, parse_args
from extract import extract
from transform import transform
from load import load
from analyze import (
    compute_total_post_tax,
    get_top_spender_post_tax,
    summarize_per_cart_post_tax,
)


def main():
    """Coordinates the ETL pipeline by calling extract -> transform -> load."""
    args = parse_args()
    access_token = get_vars()
    if access_token is None:
        return

    endpoint = f"{args.base_url}{args.resource}{args.id}"
    cart = extract(endpoint, access_token)

    if cart is None:
        return

    df = transform(cart)
    print(df.head())
    df.info()

    load(df, args.db_file, args.table_name)

    # Run post-load analysis to answer business questions
    total_post_tax = compute_total_post_tax(args.db_file, args.table_name)
    top_spender = get_top_spender_post_tax(args.db_file, args.table_name)
    cart_summaries = summarize_per_cart_post_tax(args.db_file, args.table_name)

    print("\n=== BUSINESS ANALYSIS REPORT ===")
    print(f"Total post-tax revenue: ${total_post_tax}")
    if top_spender:
        print(f"Top spender: User {top_spender[0]} (${top_spender[1]})")
    else:
        print("No top spender — table is empty.")
    print("\nPer-cart totals:")
    for cart_id, total in cart_summaries:
        print(f"  Cart {cart_id}: ${total}")
    print("==============================\n")


if __name__ == "__main__":
    main()
