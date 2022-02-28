import { Tile } from "../tile/Tile";
import styles from "./styles.module.scss";

interface GuessGridProps {
  grid: string[];
}

export function GuessGrid({ grid }: GuessGridProps) {
  return (
    <div className={styles.guessGrid}>
      {grid.map((tile) => (
        <Tile letter={tile} />
      ))}
    </div>
  );
}