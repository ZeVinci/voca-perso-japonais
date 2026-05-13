import csv, json
rows = []
with open("vocabulaire_japonais.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        rows.append({
            "jp": row["Japonais (hiraganas)"],
            "fr": row["Français"],
            "cours": row["Nom du cours"],
            "niveau": row["Niveau"],
            "topic": row["Topic"],
        })
with open("vocab.js", "w", encoding="utf-8") as f:
    f.write("const VOCAB = " + json.dumps(rows, ensure_ascii=False, indent=2) + ";\n")