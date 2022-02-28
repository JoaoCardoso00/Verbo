import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface TileProps {
  letter: string;
  activeTile: number;
  tileNumber: number;
}

export function Tile({ letter, activeTile, tileNumber }: TileProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(tileNumber === activeTile);
  }, []);

  return (
    <div className={`${styles.tile} ${isActive ? styles.active : styles.tile}`}>
      {letter}
    </div>
  );
}
