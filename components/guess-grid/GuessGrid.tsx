import { Tile } from "../tile/Tile";
import styles from "./styles.module.scss";

interface GuessGridProps {
  grid: string[];
  activeTile: number;
}

export function GuessGrid({ grid, activeTile }: GuessGridProps) {
  return (
    <div className={styles.guessGrid}>
      {grid.map((tile, index) => (
        <Tile
          letter={tile}
          key={index}
          activeTile={activeTile}
          tileNumber={index}
        />
      ))}
    </div>
  );
}
