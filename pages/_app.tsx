import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Tutorial } from "../components/tutorialModal/Tutorial";
import { createContext, useEffect, useState } from "react";
import { EndScreen } from "../components/endModal/EndScreen";
import { getDailyWord } from "../lib/helpers";

interface gameEndedContext {
  gameEnded: boolean;
  setGameEnded: Function;
}

export const gameEndedContext = createContext<gameEndedContext>(
  {} as gameEndedContext
);

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isEndOpen, setIsEndOpen] = useState(false);
  const [dailyWord, setDailyWord] = useState("");
  const [wordColors, setWordColors] = useState<number[]>([]);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    const firstTime = localStorage.getItem("@Verbo:FirstTime");
    if (firstTime !== null) {
      setIsOpen(false);
    }
    localStorage.setItem("@Verbo:FirstTime", "True");
    setDailyWord(getDailyWord());
  }, []);

  useEffect(() => {
    let gameData = JSON.parse(localStorage.getItem("@Verbo:gameData") || "");
    setWordColors(gameData.wordColors);
  }, [gameEnded]);

  useEffect(() => {
    let gameData = JSON.parse(localStorage.getItem("@Verbo:gameData") || "");
    if (gameData.gameEnded) {
      setIsEndOpen(true);
    }
  }, [gameEnded]);

  function handleCloseTutorial() {
    setIsOpen(false);
  }

  function handleCloseEndScreen() {
    setIsEndOpen(false);
  }

  return (
    <>
      <gameEndedContext.Provider value={{ gameEnded, setGameEnded }}>
        <EndScreen
          isOpen={isEndOpen}
          onRequestClose={handleCloseEndScreen}
          dailyWord={dailyWord}
          wordColors={wordColors}
        />
        <Tutorial isOpen={isOpen} onRequestClose={handleCloseTutorial} />
        <Component {...pageProps} />
        <Toaster />
      </gameEndedContext.Provider>
    </>
  );
}

export default MyApp;
