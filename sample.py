import pandas as pd

data = {
    "Name": ["Alice", "Bob", "Carol"],
    "Age": [25, 30, 28],
    "Score": [88, 92, 85]
}

df = pd.DataFrame(data)
# print(df["Score"] >= 90)
high_scores = df[df["Score"] >= 90]
print(high_scores)


