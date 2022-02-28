import { useState } from "react";
import styles from "./styles.module.scss";

interface TileProps {
  letter: string;
}

export function Tile({ letter }: TileProps) {
  return <div className={styles.tile}>{letter}</div>;
}
