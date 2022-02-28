import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface TileProps {
  letter: string;
  activeTile: number;
  tileNumber: number;
  isEndOfRow: boolean;
}

export function Tile({
  letter,
  activeTile,
  tileNumber,
  isEndOfRow,
}: TileProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(tileNumber === activeTile);
  }, [activeTile]);

  function checkTileClass(isActive: boolean, isEndOfRow: boolean) {
    if (isActive && !isEndOfRow) {
      return `${styles.active}`;
    }
  }

  return (
    <div className={`${styles.tile} ${checkTileClass(isActive, isEndOfRow)}`}>
      {letter}
    </div>
  );
}
