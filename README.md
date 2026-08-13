Number Guessing Game

A simple and interactive web application where the user attempts to guess a randomly generated number between 1 and 100. The application provides feedback after each guess, tracks attempts, maintains guess history, and allows the user to start a new game.

Features
Generates a random number between 1 and 100
Accepts user guesses through an interactive interface
Provides feedback when the guess is too high or too low
Detects the correct guess and ends the game
Tracks the number of attempts
Maintains a history of previous guesses
Validates user input
Allows the user to start a new game
Responsive and user-friendly interface
Technologies Used
React – Building the user interface and managing application state
Vite – Development server and build tool
JavaScript – Game and validation logic
CSS – Styling and responsive layout
ESLint – Code quality and static analysis
Project Structure
number-guessing-game/
│
├── src/
│   ├── components/
│   │   └── GuessGame.jsx
│   │
│   ├── utils/
│   │   └── gameLogic.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
├── package-lock.json
├── eslint.config.js
├── vite.config.js
└── README.md
How It Works

When a new game starts, the application generates a random number between 1 and 100.

The user enters a guess, which is validated before being processed.

The guess is then compared with the randomly generated number:

Guess < Target  → Too Low
Guess > Target  → Too High
Guess = Target  → Correct

The number of valid attempts is tracked throughout the game. Previous guesses are also stored and displayed to the user.

When the correct number is guessed, the game ends and the user can start a new game.

Game Logic

The core functionality is separated into gameLogic.js.

Random Number Generation

A random integer is generated within the specified range:

generateRandomNumber(min, max)
Guess Validation

The application checks that the input:

Is not empty
Is a valid number
Is a whole number
Falls within the allowed range
Guess Comparison

The user's guess is compared with the target number and returns one of three results:

low
high
correct

This keeps the game logic separate from the React user interface.

Validation

The application handles:

Empty input
Non-numeric input
Decimal values
Numbers below the minimum range
Numbers above the maximum range

For example:

Input: abc
→ Please enter a whole number.

Input: 0
→ Please enter a number between 1 and 100.

Input: 101
→ Please enter a number between 1 and 100.

Invalid guesses do not increase the attempt count.

Installation and Usage

Navigate to the project:
cd number-guessing-game

Install dependencies:
npm install

Start the development server:
npm run dev

Open the local URL provided by Vite, typically:

http://localhost:5173
Code Quality and Build

Run ESLint to check the code:
npm run lint

Create a production build:
npm run build

Preview the production build locally:
npm run preview

Testing
The application was tested against the following scenarios:

Guess lower than the target: Displays a "Too low" message.
Guess higher than the target: Displays a "Too high" message.
Correct guess: Displays a success message and ends the current game.
Empty input: Displays an appropriate validation error.
Non-numeric input: Displays an invalid input error.
Number below 1: Displays a range validation error.
Number above 100: Displays a range validation error.
New Game: Resets the target number, attempts, guess history, and messages.
Multiple guesses: Correctly updates the attempt count and maintains the history of previous guesses.