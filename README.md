# Connect 4 Dot Game 

A simple two-player Connect 4 style web game built using HTML, CSS, and JavaScript.

Players take turns placing:
-  Red dots
-  Green dots

The first player to connect **4 consecutive dots** horizontally or vertically wins the game.

---

# Features

- 7 × 6 game board
- Two-player turn system
- Win detection
- Reset game button
- Responsive board layout
- Simple UI using vanilla JavaScript

---

# Technologies Used

- HTML
- CSS
- JavaScript

---

# Project Structure

```bash
HackslashInduction26Task1/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# How to Run

## 1. Clone the repository

```bash
git clone https://github.com/Nitish1244219211/HackslashInduction26Task1.git
```

## 2. Open the project folder

```bash
cd HackslashInduction26Task1
```

## 3. Run the project

Simply open:

```bash
index.html
```

in your browser.

Or use VS Code Live Server extension.

---

# Game Logic

## Board Creation

The board is dynamically generated using nested loops.

```js
for (let r = 0; r < boardBreadth; r++) {
    for (let c = 0; c < boardLength; c++) {
        // create cell
    }
}
```

---

## Board State

A 2D array stores the game state.

```js
boardArray = Array.from(
    { length: boardBreadth },
    () => Array(boardLength).fill("")
);
```

Example:

```bash
[
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ............................
  ............................
  ["", "", "", "", "", "", ""]
]
```

Each empty string represents an empty cell.

---

# Handling Moves

When a player clicks a cell:

1. Check if the game is over
2. Check if the cell is already filled
3. Store the current player in the board array
4. Paint the bubble
5. Check for winner
6. Switch turn

---

# Winner Detection

The game checks:

- Horizontal consecutive dots
- Vertical consecutive dots

A player wins if 4 consecutive dots are found.

Logic:

```js
checkWinner(r, c)
```

This internally counts dots in:
- forward direction
- backward direction

using:

```js
consecutiveDot(r, c, mrow, mcol)
```

---

# Reset Game

The reset button:
- clears the board
- resets player turn
- creates a fresh game board

---
