export interface gameData {
  tiles: string[];
  activeTile: number;
  activeRow: number;
  isEndOfRow: boolean;
  guess: string[];
  wordColors: number[];
  isKeyboardActive: boolean;
  notInWord: string[];
  inWordWrongPosition: string[];
  inWordCorrectPosition: string[];
  gameEnded: boolean;
  wordAtTime: string;
}

export interface setters {
  setTiles: Function;
  setActiveRow: Function;
  setActiveTile: Function;
  setIsEndOfRow: Function;
  setGuess: Function;
  setWordColors: Function;
  setIsKeyboardActive: Function;
  setNotInWord: Function;
  setInWordWrongPosition: Function;
  setInWordCorrectPosition: Function;
  setGameEnded: Function;
}
