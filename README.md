# 🧩 4 Exercises — JavaScript Logic Challenges

> Four standalone JavaScript exercises covering anagrams, vowel counting, temperature conversion, and palindrome detection.

This project contains four independent JavaScript exercises, each with its own HTML page, CSS file, and JS file. A dark-themed landing page (`index.html`) links to all four exercises with emoji icons and descriptions. Each exercise demonstrates fundamental JavaScript concepts: string manipulation, DOM interaction via `getElementById`, loops, conditionals, and input validation. All variable names and UI text are in Portuguese, and each exercise includes a clean/clear button to reset the inputs and results.

## 📦 What's Inside

- 🔤 **Anagrama** — Strips spaces, converts to lowercase, sorts letters alphabetically, compares two words
- 🔢 **Contador de Vogais** — Loops through each character with `for`, checks against "aeiou" string using `includes()`
- 🌡️ **Conversor de Temperatura** — Celsius-to-Fahrenheit and Fahrenheit-to-Celsius with `parseFloat` validation and `toFixed(2)`
- 🔁 **Palindromo** — Splits string into array, reverses it, joins back, compares with original
- 🏠 Dark-themed landing page (`#0a0a0f` background, amber `#f59e0b` accents) with card-style navigation and hover animations
- 🧹 Each exercise has a clean/clear function to reset all fields
- 📝 Portuguese variable names and UI text throughout (`verificar`, `contador`, `limpar`, `resultado`)
- 🎨 Individual CSS files per exercise for independent styling
- 🔗 Landing page uses inline `<style>` with `system-ui` font and `translateY(-2px)` hover lift effect

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🏗️ Project Structure

```
4exercises/
├── index.html          # Landing page — dark theme, links to all 4 exercises
├── anagrama.html       # Anagram checker page (two text inputs + button)
├── anagrama.css        # Anagram styles
├── anagrama.js         # verificar() + clean() — sort-and-compare logic
├── contador.html       # Vowel counter page (one text input + button)
├── contador.css        # Vowel counter styles
├── contador.js         # contador() + clean() — for-loop vowel counting
├── conversor.html      # Temperature converter page (number input + dropdown)
├── conversor.css       # Converter styles
├── conversor.js        # converter() + limpar() — formula with validation
├── palindromo.html     # Palindrome checker page (one text input + button)
├── palindromo.css      # Palindrome styles
└── palindromo.js       # verificar() + clean() — reverse-and-compare logic
```

## 🔄 How Each Exercise Works

### 🔤 Anagrama (`anagrama.js`)

```
Input: palavra1 = "listen", palavra2 = "silent"
  ↓ .toLowerCase()
  ↓ .replace(/ /g, "")        → strip all spaces
  ↓ .split("").sort().join("") → "eilnst", "eilnst"
  ↓ compare: a === b
Output: "Boa! Sao anagramas!"
```

### 🔢 Contador de Vogais (`contador.js`)

```
Input: texto = "Hello World"
  ↓ .toLowerCase() → "hello world"
  ↓ for (i = 0; i < texto.length; i++)
  ↓   if ("aeiou".includes(texto[i])) → total++
  ↓ total = 3 (e, o, o)
Output: "O total de vogais: 3"
```

### 🌡️ Conversor de Temperatura (`conversor.js`)

```
Input: valor = 100, tipo = "cf" (Celsius → Fahrenheit)
  ↓ parseFloat(valor) → 100
  ↓ Validation: if (!valor && valor !== 0) → "Escreve um numero"
  ↓ Formula: (100 * 9 / 5) + 32 = 212.00
Output: "212.00 oF"

Input: valor = 212, tipo = "fc" (Fahrenheit → Celsius)
  ↓ Formula: (212 - 32) * 5 / 9 = 100.00
Output: "100.00 oC"
```

### 🔁 Palindromo (`palindromo.js`)

```
Input: texto = "aba"
  ↓ .split("")    → ["a", "b", "a"]
  ↓ .reverse()    → ["a", "b", "a"]
  ↓ .join("")     → "aba"
  ↓ compare: "aba" === "aba"
Output: "E sim palindromo!"
```

## 📊 Exercise Comparison Table

| Exercise | Input Fields | JS Technique | Key Methods | Reset Function |
|----------|-------------|-------------|-------------|----------------|
| **Anagrama** | Two text fields (palavra1, palavra2) | String sorting | `split`, `sort`, `join`, `replace`, `toLowerCase` | `clean()` |
| **Contador** | One text field (texto) | Character loop | `includes`, `for` loop, `toLowerCase` | `clean()` |
| **Conversor** | Number input + `<select>` dropdown | Math formula | `parseFloat`, `toFixed(2)`, conditional branching | `limpar()` |
| **Palindromo** | One text field (texto) | Array reversal | `split`, `reverse`, `join` | `clean()` |

## 🚀 How to Run

```bash
# 1. Clone the repository
git clone https://github.com/VidiPT89/4exercises.git

# 2. Open the landing page
cd 4exercises
open index.html    # macOS
# or: start index.html (Windows) / xdg-open index.html (Linux)

# 3. Click any exercise card to open it
```

## 📝 Notes

- The palindrome checker is case-sensitive — "Aba" would NOT be detected as a palindrome because it compares the raw input without calling `toLowerCase()` first, unlike the anagram checker which normalizes case before comparing
- The temperature converter handles the edge case of `0` correctly with the check `!valor && valor !== 0` — without the second condition, entering 0 degrees would trigger the error message since `!0` is truthy in JavaScript
- The vowel counter only checks the 5 basic vowels (a, e, i, o, u) and does not account for accented Portuguese vowels (a with tilde, e with acute, o with circumflex, etc.)
- The landing page uses a clean dark theme styled entirely with inline `<style>` (59 lines) rather than an external CSS file — it uses `system-ui, -apple-system, sans-serif` for a native OS look
- The clean/clear function naming is inconsistent across exercises: `clean()` in anagrama, contador, and palindromo, but `limpar()` in conversor — mixing English and Portuguese function names
- Each exercise is fully self-contained with its own HTML/CSS/JS triplet, making them easy to understand, modify, and reuse independently

---

Developed by **David Arsenio Martins** — *"Vidi"*
