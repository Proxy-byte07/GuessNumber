Number Guessing Game
Project Overview

Number Guessing Game is an interactive web application in which the user attempts to guess a randomly generated number between 1 and 100. The application generates a new target number for each game and provides feedback after every guess to help the user determine whether the entered number is too high, too low, or correct. The application also tracks the number of attempts and maintains a history of previous guesses.

Features

The application generates a random number between 1 and 100 at the beginning of each game. Users can enter their guesses through an interactive input field, and the application compares each guess with the randomly generated target number. It provides appropriate feedback such as "Too low", "Too high", or a success message when the correct number is guessed. The application maintains the user's guess history and attempt count and provides a New Game option to reset the current game and generate a new target number.

Technologies Used

The project is developed using React and JavaScript for implementing the application logic, state management, and user interface. Vite is used as the development and build tool, while CSS is used to create a clean and responsive interface. ESLint is used to maintain code quality and identify potential issues during development.

Project Structure

The application follows a component-based structure that separates the user interface from the game logic. The main game component manages the user input, game state, feedback messages, attempt count, and guess history. The JavaScript game logic handles random number generation, guess comparison, validation, and game state updates. App.jsx manages the overall application structure and connects the different parts of the game.

Game Logic

At the beginning of each game, the application generates a random integer between 1 and 100. When the user submits a guess, the application validates the input and compares it with the target number. If the guess is lower than the target number, the application displays a "Too low" message. If the guess is higher, it displays a "Too high" message. When the user guesses the correct number, a success message is displayed and the game is marked as completed. Each valid attempt is recorded in the guess history and the attempt counter is updated accordingly.

Validation

The application validates user input before processing a guess. It prevents empty input and rejects non-numeric values. Guesses below 1 or above 100 are also rejected because they fall outside the defined game range. Appropriate validation messages are displayed to guide the user and prevent invalid guesses from affecting the attempt count or game state.

Testing

The application was tested with guesses lower and higher than the target number to verify that the appropriate feedback is displayed. Correct guesses were tested to confirm that the success message and game completion state work correctly. Validation was tested using empty input, non-numeric values, numbers below 1, and numbers above 100. The application was also tested for multiple guesses to verify that the attempt count and guess history are updated correctly. The New Game functionality was tested to ensure that the game state is reset and a new random number is generated.

Installation and Usage

To run the project locally, clone the repository and navigate to the project directory. Install the required dependencies using npm install and start the development server using npm run dev. The application can then be accessed through the local URL provided by Vite, typically http://localhost:5173.

For production verification, the project can be checked using npm run lint and built using npm run build. The production build can also be previewed using npm run preview.

Live Demo

Visit the website for the live demo: https://proxy-byte07.github.io/GuessNumber/