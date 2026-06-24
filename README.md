# 🧠 4 JavaScript Exercises — Logic, Loops, and a Lot of `.split()`

> Four standalone vanilla JS mini-apps covering string manipulation, input validation, and DOM basics.

Four self-contained JavaScript exercises built while learning the fundamentals of logic and DOM manipulation. No frameworks. No libraries. Just functions, conditions, and the browser doing its thing.

## 📦 What's Inside

| Exercise | What It Does |
|---|---|
| 🔤 Anagrama | Takes two words, strips spaces, sorts letters, checks if they're anagrams |
| 🔢 Contador de Vogais | Counts every vowel (`a e i o u`) in a word or phrase |
| 🌡️ Conversor de Temperatura | Converts between Celsius and Fahrenheit with input validation |
| 🔁 Palíndromo | Reverses a word and checks if it reads the same both ways |

Each exercise has its own `.html`, `.css`, and `.js` file. An `index.html` landing page links to all four.

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🚀 How to Run

```bash
git clone https://github.com/VidiPT89/4exercises.git
cd 4exercises
# Open index.html for the landing page, or any individual exercise HTML file
```

## 📝 Notes

- The palindrome checker is case-sensitive. `"Ana"` is not a palindrome. `"ana"` is.
- The vowel counter only checks `a e i o u`. Accented vowels (`ã`, `é`, `ô`) are not handled yet.
- `toFixed(2)` in the temperature converter makes everything look precise. Whether it actually is — that's between you and IEEE 754.
- All four exercises use `onclick` attributes inline in the HTML. Improvements pending.
- The anagram checker removes spaces before comparing. `"listen"` and `"silent"` work. `"astronomer"` and `"moon starer"` also work.
- First JavaScript exercises. First time manipulating the DOM on purpose.

---

Developed by **David Martins**
