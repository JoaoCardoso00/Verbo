import type { NextPage } from "next";
import { useState } from "react";
import { GuessGrid } from "../components/guess-grid/GuessGrid";
import { Keyboard } from "../components/Keyboard/Keyboard";
import toast from "react-hot-toast";

const Home: NextPage = () => {
  const arr = Array.apply(null, Array(30)).map(() => "");
  const [tiles, setTiles] = useState(arr);
  const [activeTile, setActiveTile] = useState(0);
  const [activeRow, setActiveRow] = useState(0);
  const rowStart = activeRow * 5;

  function handleMouseClick(letter: string) {
    if (activeTile > rowStart + 4) return;
    const newTiles = [...tiles];

    newTiles[activeTile] = letter;
    setActiveTile(activeTile + 1);

    setTiles(newTiles);
  }

  function handleDelete() {
    if (activeTile === 0) return;
    if (activeTile <= rowStart) return;
    const newTiles = [...tiles];

    newTiles[activeTile - 1] = "";
    setActiveTile(activeTile - 1);

    setTiles(newTiles);
  }

  function handleSubmit() {
    if (activeTile !== rowStart + 5) {
      toast.error("Por favor insira 5 letras", {
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
  }

  return (
    <>
      <GuessGrid grid={tiles} />
      <Keyboard
        handleMouseClick={handleMouseClick}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Home;