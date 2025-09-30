import json
import csv

def load_config(filepath):
    with open(filepath, "r") as json_file:
        config = json.load(json_file)

def read_data(filepath):
    with open(filepath, "r") as csv_file:
        sample = csv.DictReader(csv_file)


if __name__ == "__main__":