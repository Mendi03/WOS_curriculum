# Transform---------------------

numbers = [1, 2, 3, 4, 5]
nums = [n * n for n in numbers]
print(nums)
# Expected: [1, 4, 9, 16, 25]

words = ["python", "data", "engineer"]
words2 = [word.upper() for word in words]
print(words2)

# Expected: ["PYTHON", "DATA", "ENGINEER"]


# Filter ------------------
numbers2 = [10, 15, 20, 25, 30]
nums2 = [n for n in numbers2 if n % 2 == 0]
print(nums2)
# Expected: [10, 20, 30]

names = ["Bob", "Alice", "Charlie", "Eve"]
filteredsNames = [n for n in names if len(n) >= 5]
print(filteredsNames)
# Expected: ["Alice", "Charlie"]


# Transform + Filter ----------------------------
numbers3 = [1, 2, 3, 4, 5]
nums3 = [n * 2 for n in numbers3 if n % 2 == 1]
print(nums3)
# Expected: [2, 6, 10]


records = [
    {"id": 1, "status": "complete"},
    {"id": 2, "status": "pending"},
    {"id": 3, "status": "complete"},
]

ids = [r.get("id") for r in records if r.get("status") == "complete"]
print(ids)
# Expected: [1, 3]
