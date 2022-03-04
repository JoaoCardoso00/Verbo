import { targetWords } from "./targetWords";

// all words: words
// targetWords : targetWords

export function useDailyWord() {
  const offsetFromDate = new Date(2022, 0, 1).getTime();
  const msOffset = Date.now() - offsetFromDate;
  const dayOffset = msOffset / 1000 / 60 / 60 / 24;
  return targetWords[Math.ceil(dayOffset)];
}

export function useLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || "{}");
}

