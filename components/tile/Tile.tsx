import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface TileProps {
  letter: string;
  activeTile: number;
  tileNumber: number;
  isEndOfRow: boolean;
  wordColors: number[];
}

export function Tile({
  letter,
  activeTile,
  tileNumber,
  isEndOfRow,
  wordColors,
}: TileProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(tileNumber === activeTile);
  }, [activeTile]);

  function checkTileClass() {
    let currentTileState = wordColors[tileNumber];

    if (tileNumber === 30) {
      return `${styles.lastTile}`;
    }

    switch (currentTileState) {
      case 0:
        //empty
        if (isActive && !isEndOfRow) {
          return `${styles.active}`;
        }
        break;

      case 1:
        //not in word
        return `${styles.notInWord}`;

      case 2:
        //in word wrong postion
        return `${styles.inWordWrongPosition}`;

      case 3:
        //in word correct position
        return `${styles.inWordRightPosition}`;

      default:
        break;
    }
  }

  return <div className={`${styles.tile} ${checkTileClass()}`}>{letter}</div>;
}
