# Carts Pipeline: Data Flow Overview

This handout explains how data flows through the **Carts Pipeline** — a complete ETL (Extract → Transform → Load → Analyze) process written in Python.

Each stage performs a distinct role, and together they simulate a realistic data engineering workflow.

---

## 1 Extract: Fetch Data from an API

The **Extract** step retrieves JSON data from a public API endpoint:

```python
https://dummyjson.com/carts/{id}
```

Each cart contains a list of products and metadata (user ID, totals, etc.). The extractor requests the data and stores it as a Python dictionary.

**Key file:** `extract.py`

**Output:** a `dict` representing a single cart.

---

## 2 Transform: Clean and Enrich the Data

The **Transform** stage is the heart of the pipeline. It flattens, cleans, and enhances the data to make it analysis-ready.

### a) Flatten

Convert nested JSON lists into a tabular structure:

```python
df = pd.json_normalize(cart, record_path="products", meta=["cart_id", "userId"])
```

### b) Clean

Drop invalid rows, coerce numeric types, and remove unnecessary columns:

```python
df = df.dropna(subset=["id", "price", "quantity"])
```

### c) Compute Derived Fields

Calculate or fill missing values such as totals and discounts:

```python
df["total"] = df["price"] * df["quantity"]
df["discounted_total"] = df["total"] * (1 - df["discount_percentage"] / 100)
```

### d) Reorder for Readability

Columns are reordered so outputs are predictable for testing and review.

**Key file:** `transform.py`

**Output:** a clean, well-structured `DataFrame`.

---

## 3 Load: Save the Data to SQLite

The **Load** step writes the transformed DataFrame into a local SQLite database for persistence and querying.

```python
df.to_sql(table_name, conn, if_exists="append", index=False)
```

This allows future analysis steps to run SQL queries directly.

**Key file:** `load.py`

**Output:** a `data.db` file containing the `carts` table.

---

## 4 Analyze: Answer Business Questions

The **Analyze** stage queries the database to compute metrics and answer business questions such as:

- What is the total post-tax revenue?
- Who is the top spender?
- What are the post-tax totals per cart?

```python
total_post_tax = compute_total_post_tax(args.db_file, args.table_name)
top_spender = get_top_spender_post_tax(args.db_file, args.table_name)
cart_summaries = summarize_per_cart_post_tax(args.db_file, args.table_name)
```

**Key file:** `analyze.py`

**Output:** console report summarizing post-tax revenue and spending behavior.

---

## Full Pipeline Diagram

```text
 ┌────────────┐     ┌───────────────┐     ┌─────────────┐     ┌────────────┐
 │  Extract   │ →   │  Transform    │ →   │    Load     │ →   │  Analyze   │
 └────────────┘     └───────────────┘     └─────────────┘     └────────────┘
  fetch API          clean + enrich         write to DB          query DB
```

---

## Summary

By the end of this pipeline:

- We’ve fetched **real-world API data**.
- Transformed it into a **flat, queryable dataset**.
- Persisted it in a **SQLite database**.
- Produced an **analysis report** answering business questions.

This mirrors how modern data engineers prepare, load, and analyze data in production systems.
