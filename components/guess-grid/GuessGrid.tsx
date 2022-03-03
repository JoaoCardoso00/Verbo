import { useEffect } from "react";
import { Tile } from "../tile/Tile";
import styles from "./styles.module.scss";

interface GuessGridProps {
  grid: string[];
  activeTile: number;
  isEndOfRow: boolean;
  setIsEndOfRow: Function;
  rowStart: number;
  wordColors: number[];
}

export function GuessGrid({
  grid,
  activeTile,
  isEndOfRow,
  setIsEndOfRow,
  rowStart,
  wordColors
}: GuessGridProps) {
  useEffect(() => {
    setIsEndOfRow(activeTile === rowStart + 5);
  }, [activeTile]);

  return (
    <div className={styles.guessGrid}>
      {grid.map((tile, index) => (
        <Tile
          letter={tile}
          key={index}
          activeTile={activeTile}
          tileNumber={index}
          isEndOfRow={isEndOfRow}
          wordColors={wordColors}
        />
      ))}
    </div>
  );
}
