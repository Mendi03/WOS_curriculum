"""
3. JSON Practice

Open the provided user_profile.py file and inspect the user_profile dictionary.
Write the dictionary to a file called user.json.
Re-open the file, load the JSON, and print the user’s name.
"""

import json

user_profile = {"id": 1, "name": "Alice", "active": True}

with open("user.json", "w") as outfile:
    # Use indent=4 for human-readable formatting
    json.dump(user_profile, outfile, indent=4)
    print("Data written to output.json")

with open("user.json", "r") as json_file:
    user_data = json.load(json_file)

print(user_data.get("name"))
