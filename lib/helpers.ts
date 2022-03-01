import { Words } from "./words";

export function getAvailableTiles(rowGuess: string[]) {
  let availableTiles: number[] = [];

  rowGuess.some((letter, index) => {
    if (letter === "") {
      availableTiles.push(index + 1);
    }
  });

  return availableTiles;
}


export function validateWord(word:string) {
  if (Words.includes(word)) {
    return true;
  }
  return false;
}
