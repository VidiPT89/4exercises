# 🧠 4 JavaScript Exercises — Logic, loops, and a lot of `.split()`

> *"The best way to learn JavaScript is to write JavaScript. The second best is to write it, stare at it, and then write it again."*

Four standalone vanilla JS mini-apps built while learning the fundamentals of JavaScript logic and DOM manipulation. No frameworks. No libraries. Just functions, conditions, and the browser doing its thing.

## What's inside

| Exercise | What it does |
|---|---|
| 🔤 Anagrama | Takes two words, strips spaces, sorts letters, and checks if they're anagrams |
| 🔢 Contador de Vogais | Counts every vowel (`a e i o u`) in a word or phrase |
| 🌡️ Conversor de Temperatura | Converts between Celsius and Fahrenheit with input validation |
| 🔁 Palíndromo | Reverses a word and checks if it reads the same both ways |

Each exercise is self-contained: its own `.html`, `.css`, and `.js` file. Open any one of them and it just works.

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## How to run

No setup needed. Clone the repo and open any HTML file directly in the browser:

```bash
git clone https://github.com/VidiPT89/4exercises.git
```

Then open `anagrama.html`, `contador.html`, `conversor.html`, or `palindromo.html` — pick your poison.

## Honest notes

- The palindrome checker is case-sensitive. `"Ana"` is not a palindrome. `"ana"` is. The universe is unfair.
- The vowel counter only checks `a e i o u`. Accented vowels (`ã`, `é`, `ô`) are on their own. Improvements pending.
- `toFixed(2)` in the temperature converter makes everything look precise. Whether it actually is — that's between you and the IEEE 754 standard.
- All four exercises use `onclick` attributes inline in the HTML. The JavaScript community has opinions about this. They're noted.
- The anagram checker removes spaces before comparing. `"listen"` and `"silent"` work. `"astronomer"` and `"moon starer"` also work. That one was a nice surprise.

## Context

Built as part of my **Web Development (Front-End)** module at **CESAE Digital**.
First JavaScript exercises. First time manipulating the DOM on purpose.

---

*Next up: probably arrays, objects, and fetch. The `onclick` inline attributes will not survive.*
