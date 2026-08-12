import { useState } from "react";
import {
  generateRandomNumber,
  validateGuess,
  checkGuess,
} from "../utils/gameLogic";

function GuessGame() {
  const MIN = 1;
  const MAX = 100;

  const [secretNumber, setSecretNumber] = useState(
    generateRandomNumber(MIN, MAX)
  );
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState(
    "Guess a number between 1 and 100."
  );
  const [error, setError] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [guessHistory, setGuessHistory] = useState([]);

  const handleGuess = () => {
    setError("");

    const validationError = validateGuess(guess, MIN, MAX);

    if (validationError) {
      setError(validationError);
      return;
    }

    const number = Number(guess);
    const result = checkGuess(number, secretNumber);

    setAttempts((prev) => prev + 1);
    setGuessHistory((prev) => [...prev, number]);

    if (result === "low") {
      setMessage("Too low! Try again.");
    } else if (result === "high") {
      setMessage("Too high! Try again.");
    } else {
      setMessage(
        `Correct! You guessed the number in ${attempts + 1} attempts.`
      );
      setGameOver(true);
    }

    setGuess("");
  };

  const handleNewGame = () => {
    setSecretNumber(generateRandomNumber(MIN, MAX));
    setGuess("");
    setAttempts(0);
    setMessage("Guess a number between 1 and 100.");
    setError("");
    setGameOver(false);
    setGuessHistory([]);
  };

  return (
    <div className="game-container">
      <div className="game-card">
        <div className="hero-panel">
          <div>
            <p className="eyebrow">Interactive Challenge</p>
            <h1>Number Guessing Game</h1>
          </div>
          <div className="range-pill">1 - 100</div>
        </div>

        <p className="subtext">Try to find the secret number using the fewest guesses.</p>

        <div className="input-row">
          <label htmlFor="guess-input" className="sr-only">
            Enter your guess
          </label>
          <input
            id="guess-input"
            type="number"
            min={MIN}
            max={MAX}
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter a number"
            disabled={gameOver}
          />
          <button className="submit-btn" onClick={handleGuess} disabled={gameOver}>
            Submit
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="status-card">
          <p className="status-label">Status</p>
          <p className="status-text">{message}</p>
        </div>

        <div className="stats-grid">
          <div>
            <p className="stat-label">Attempts</p>
            <p className="stat-value">{attempts}</p>
          </div>
          <div>
            <p className="stat-label">Guesses</p>
            <p className="stat-value">{guessHistory.length}</p>
          </div>
        </div>

        {guessHistory.length > 0 && (
          <div className="history-panel">
            <p className="history-title">Your guesses</p>
            <div className="history-list">
              {guessHistory.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        )}

        <button className="new-game-btn" onClick={handleNewGame}>
          New Game
        </button>
      </div>
    </div>
  );
}

export default GuessGame;
