import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { GuessGrid } from "../components/guess-grid/GuessGrid";
import { Keyboard } from "../components/Keyboard/Keyboard";
import toast from "react-hot-toast";

const Home: NextPage = () => {
  const arr = Array.apply(null, Array(30)).map(() => "");
  const [tiles, setTiles] = useState(arr);
  const [activeTile, setActiveTile] = useState(0);
  const [activeRow, setActiveRow] = useState(0);
  const [isEndOfRow, setIsEndOfRow] = useState(false);
  const rowStart = activeRow * 5;
  const keyLetters = "abcdefghijklmnopqrstuvwxyz";

  //TODO: function that checks next empty tile for keyboard correction

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  function handleLetterInsertion(letter: string) {
    if (activeTile > rowStart + 4) return;
    const newTiles = [...tiles];

    newTiles[activeTile] = letter;
    setActiveTile(activeTile + 1);

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

    if (activeTile !== rowStart + 5 || guess.includes("")) {
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
    setActiveRow(activeRow + 1);
    setIsEndOfRow(false);
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
      />
      <Keyboard
        handleMouseClick={handleLetterInsertion}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Home;
