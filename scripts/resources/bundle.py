"""Zip the downloadable PDFs into one library file.

Usage: python3 -I scripts/resources/bundle.py   (run from the repo root after print_pdfs.mjs)
Keep FILES in step with lib/resources.ts.
"""
import zipfile

FILES = {
    "tank-factors.pdf": "Gardner-Underwater-Tank-Factors.pdf",
    "gas-consumption-table.pdf": "Gardner-Underwater-Gas-Consumption-Table.pdf",
    "gas-math-formulas.pdf": "Gardner-Underwater-Gas-Math-Formulas.pdf",
    "gas-planning-worksheet.pdf": "Gardner-Underwater-Gas-Planning-Worksheet.pdf",
    "dive-log.pdf": "Gardner-Underwater-Dive-Log.pdf",
    "emergency-action-plan.pdf": "Gardner-Underwater-Emergency-Action-Plan.pdf",
}

with zipfile.ZipFile("resources/files/dive-planning-library.zip", "w", zipfile.ZIP_DEFLATED) as z:
    for src, name in FILES.items():
        z.write(f"resources/files/{src}", f"Gardner-Underwater-Dive-Planning-Library/{name}")
print("ok")
