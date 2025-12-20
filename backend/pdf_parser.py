import pymupdf

doc = pymupdf.open("artifacts/sources/The-Quran-Saheeh-International.pdf")

out = open("artifacts/sources/The-Quran-Saheeh-International.txt", "w")
text_accumulated = ""
CHAR_LIMIT = 10000  # Testing only with 10000 characters first

for page_num, page in enumerate(doc, start=1): 
    page_text = page.get_text("text")
    remaining_chars = CHAR_LIMIT - len(text_accumulated)
    
    if remaining_chars <= 0:
        break
    
    text_to_add = page_text[:remaining_chars]
    text_accumulated += text_to_add
    
    print(f"Page {page_num}: Extracted {len(page_text)} chars, Total: {len(text_accumulated)}/{CHAR_LIMIT}")
    
    if len(text_accumulated) >= CHAR_LIMIT:
        break


out.write(text_accumulated)
out.close()
doc.close()