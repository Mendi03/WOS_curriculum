"""1. Text File Practice

Open the provided notes.txt file and print all lines to the console."""

import csv

with open("./notes.txt", "r") as f:
    # We can read and write within this block. 'f' is the file handle.
    content = f.read()

print(content)

"""
2. CSV Practice

Open the provided students.csv file.
Read the CSV into a list of dictionaries using csv.DictReader.
Print the names of students who scored above 80.
"""


def read_csv_to_dicts(filepath):
    """Reads a CSV file and returns a list of dictionaries (records)."""
    records = []
    # 'r' mode opens for reading
    with open(filepath, "r", newline="") as csvfile:
        # DictReader treats the first row as keys, subsequent rows as values
        reader = csv.DictReader(csvfile)
        for row in reader:
            records.append(row)
    return records


all_students = read_csv_to_dicts("./students.csv")

students_above_80 = [
    student["name"] for student in all_students if int(student["score"]) > 80
]

print(students_above_80)

"""
3. JSON Practice

Open the provided user_profile.py file and inspect the user_profile dictionary.
Write the dictionary to a file called user.json.
Re-open the file, load the JSON, and print the user’s name.
"""

# solved in user_profile.py
