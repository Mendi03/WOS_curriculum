import json
import csv
import colorama


def load_config(filepath):
    with open(filepath, "r") as json_file:
        config = json.load(json_file)
        return config


def read_data(filepath):
    records = []

    with open(filepath, "r") as csv_file:
        reader = csv.DictReader(csv_file)
        for row in reader:
            records.append(row)

    return records


if __name__ == "__main__":
    # 1 Read Config: Call load_config() to get the source file path and record limit.
    j_data = load_config("./config.json")
    # 2 Read Data: Call read_data() to load the CSV content.
    c_data = read_data("./sample_data.csv")
    # # 3 Process and Filter: Iterate over the data:
    #     Use enumerate() to assign a sequential Record ID (starting at 1) to each dictionary in the data.
    #     Process and print only the number of records specified by the record_limit in your configuration (e.g., the first 5 records).
    count = 0
    for i, header in enumerate(c_data[: j_data.get("record_limit")], 1):
        print(f"Record {i}: {header}")
        # 4 Generate Report:
        with open(j_data.get("output_report"), "a") as report:
            report.write(f"Record ID: {i}, Name: {header.get('name')}\n")

        count += 1

    print(
        colorama.Fore.GREEN
        + f"Succesfully added {count} records to {j_data.get('output_report')}"
    )

    print(colorama.Style.RESET_ALL)
