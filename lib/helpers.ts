import toast from "react-hot-toast";
import { Words } from "./words";
import { gameData, setters } from "../lib/interfaces";

export function getAvailableTiles(rowGuess: string[]) {
  let availableTiles: number[] = [];

  rowGuess.some((letter, index) => {
    if (letter === "") {
      availableTiles.push(index + 1);
    }
  });

  return availableTiles;
}

export function validateWord(word: string) {
  if (Words.includes(word)) {
    return true;
  }
  return false;
}

export function checkWin(word: string[], dailyWord: string[]) {
  if (word.toString() === dailyWord.toString()) {
    return true;
  }
  return false;
}

export function checkWord(word: string[], dailyWord: string[]) {
  // 1: Not in Word
  // 2: in Word wrong position
  // 3: in word correct position

  let temp = dailyWord;
  let res: number[] = [];

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      if (temp.includes(word[i])) {
        if (word[i] === temp[i]) {
          res.push(3);
          temp[i] = "";
          break;
        } else {
          if (word[i] !== temp[j]) {
            continue;
          }
          res.push(2);
          temp[j] = "";
          break;
        }
      } else {
        res.push(1);
        break;
      }
    }
    continue;
  }

  return res;
}

export function toastError(message: string) {
  toast.error(message, {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
}

export function saveGameData(gameData: gameData) {
  localStorage.setItem("gameData", JSON.stringify(gameData));
}

export function loadGameData(gameData: gameData, setters: setters) {
  setters.setTiles(gameData.tiles);
  setters.setActiveRow(gameData.activeRow);
  setters.setActiveTile(gameData.activeTile);
  setters.setIsEndOfRow(gameData.isEndOfRow);
  setters.setGuess(gameData.guess);
  setters.setWordColors(gameData.wordColors);
  setters.setIsKeyboardActive(gameData.isKeyboardActive);
  setters.setNotInWord(gameData.notInWord);
  setters.setInWordWrongPosition(gameData.inWordWrongPosition);
  setters.setInWordCorrectPosition(gameData.inWordCorrectPosition);
  setters.setGameEnded(gameData.gameEnded);
}
