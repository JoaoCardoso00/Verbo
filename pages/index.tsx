import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { GuessGrid } from "../components/guess-grid/GuessGrid";
import { Keyboard } from "../components/Keyboard/Keyboard";
import toast from "react-hot-toast";
import { checkWord, getAvailableTiles } from "../lib/helpers";
import { useDailyWord } from "../lib/hooks";
import { validateWord } from "../lib/helpers";
import { checkWin } from "../lib/helpers";

const Game: NextPage = () => {
  const arr = Array.apply(null, Array(30)).map(() => "");
  const arr2 = Array.apply(null, Array(30)).map(() => 0);
  const [tiles, setTiles] = useState(arr);
  const [activeTile, setActiveTile] = useState(0);
  const [activeRow, setActiveRow] = useState(0);
  const [isEndOfRow, setIsEndOfRow] = useState(false);
  const [guess, setGuess] = useState<string[]>([]);
  const [wordColors, setWordColors] = useState(arr2);
  const [isKeyboardActive, setIsKeyboardActive] = useState(true);
  const [notInWord, setNotInWord] = useState<string[]>([]);
  const [inWordWrongPosition, setInWordWrongPosition] = useState<string[]>([]);
  const [inWordCorrectPosition, setInWordCorrectPosition] = useState<string[]>(
    []
  );
  const rowStart = activeRow * 5;
  const keyLetters = "abcdefghijklmnopqrstuvwxyz";
  const [dailyWord, setDailyWord] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setGuess(tiles.slice(rowStart, rowStart + 5));
  }, [tiles]);

  useEffect(() => {
    setDailyWord(useDailyWord());
  }, []);

  function handleLetterInsertion(letter: string) {
    if (activeTile > rowStart + 4) return;
    const newTiles = [...tiles];
    const availableTiles = getAvailableTiles(guess);

    newTiles[activeTile] = letter;

    if (tiles[activeTile] === "" && tiles[activeTile + 1] === "") {
      // +1
      if (activeTile === rowStart + 4 && availableTiles.length !== 1) {
        setActiveTile(rowStart + (availableTiles[0] - 1));
      } else {
        setActiveTile(activeTile + 1);
      }
    } else if (tiles[activeTile] === "" && tiles[activeTile + 1] !== "") {
      //next available
      if (availableTiles.length === 1) {
        setActiveTile(rowStart + 5);
      } else {
        setActiveTile(rowStart + (availableTiles[1] - 1));
      }
    } else if (tiles[activeTile] !== "") {
      // next available
      if (availableTiles.length === 0) {
        setActiveTile(rowStart + 5);
      } else {
        setActiveTile(rowStart + availableTiles[0] - 1);
      }
    } else {
      // +1
      setActiveTile(rowStart + availableTiles[0]);
    }

    setTiles(newTiles);
  }

  function handleDelete() {
    const newTiles = [...tiles];

    if (newTiles[activeTile] !== "") {
      newTiles[activeTile] = "";
      setTiles(newTiles);
      return;
    }
    if (activeTile <= rowStart) return;
    if (activeTile === 0) return;

    newTiles[activeTile - 1] = "";
    setActiveTile(activeTile - 1);

    setTiles(newTiles);
  }

  function handleSubmit() {
    const guess = tiles.slice(rowStart, rowStart + 5);

    if (guess.includes("")) {
      toast.error("Por favor insira 5 letras.", {
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
      return;
    }

    if (activeRow >= 5) return;

    if (activeTile !== rowStart + 5) {
      setActiveTile(rowStart + 5);
    }

    if (validateWord(guess.toString().replaceAll(",", "").toUpperCase())) {
      const tempArr = [...wordColors];
      let tempWordColors = checkWord(
        guess,
        dailyWord.toLocaleLowerCase().split("")
      );

      for (let i = rowStart, j = 0; i < rowStart + 5; i++, j++) {
        tempArr[i] = tempWordColors[j];
      }

      setWordColors(tempArr);

      const notInWordTemp = [...notInWord];
      const inWordCorrectPositionTemp = [...inWordCorrectPosition];
      const inWordWrongPositionTemp = [...inWordWrongPosition];

      for (let k = rowStart; k < rowStart + 5; k++) {
        const letter = tiles[k];
        const letterState = tempArr[k];

        switch (letterState) {
          case 1:
            notInWordTemp.push(letter);
            break;

          case 2:
            inWordWrongPositionTemp.push(letter);
            break;

          case 3:
            inWordCorrectPositionTemp.push(letter);
            break;

          default:
            break;
        }
      }

      setNotInWord([...new Set(notInWordTemp)]);
      setInWordWrongPosition([...new Set(inWordWrongPositionTemp)]);
      setInWordCorrectPosition([...new Set(inWordCorrectPositionTemp)]);

      if (checkWin(guess, dailyWord.toLocaleLowerCase().split(""))) {
        toast.success("You Win!");
        document.removeEventListener("keydown", handleKeyDown);
        setIsKeyboardActive(false);
        return;
      }

      setActiveRow(activeRow + 1);
      setIsEndOfRow(false);
      setGuess(["", "", "", "", ""]);
    } else {
      toast.error("Palavra Inválida", {
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
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      handleSubmit();
    }

    if (e.key === "Backspace") {
      handleDelete();
    }

    if (keyLetters.includes(e.key)) {
      handleLetterInsertion(e.key);
    }

    if (e.key === "ArrowLeft") {
      if (activeTile === 0) return;
      if (activeTile <= rowStart) return;
      setActiveTile(activeTile - 1);
    }

    if (e.key === "ArrowRight" || e.key === " ") {
      if (activeTile > rowStart + 3) return;
      setActiveTile(activeTile + 1);
    }
  }

  return (
    <>
      <GuessGrid
        grid={tiles}
        activeTile={activeTile}
        isEndOfRow={isEndOfRow}
        setIsEndOfRow={setIsEndOfRow}
        rowStart={rowStart}
        wordColors={wordColors}
      />
      <Keyboard
        notInWord={notInWord}
        inWordWrongPosition={inWordWrongPosition}
        inWordCorrectPosition={inWordCorrectPosition}
        isActive={isKeyboardActive}
        handleMouseClick={handleLetterInsertion}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Game;
