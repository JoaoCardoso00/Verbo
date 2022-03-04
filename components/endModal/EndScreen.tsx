import Modal from "react-modal";
import { getCopyPaste } from "../../lib/helpers";

interface EndScreenProps {
  isOpen: boolean;
  onRequestClose: () => void;
  dailyWord: string;
  wordColors: number[];
}

export function EndScreen({
  isOpen,
  onRequestClose,
  dailyWord,
  wordColors,
}: EndScreenProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <h1 className="dailyWordInfo">Palavra do dia: {dailyWord}</h1>
      <button className="share" onClick={() => getCopyPaste(wordColors)}>
        Copiar Resultado
      </button>
      <span className="creatorInfo">
        Jogo feito por:{" "}
        <a href="https://github.com/JoaoCardoso00" target="_blank" rel="noreferrer">
          João Cardoso
        </a>
      </span>
    </Modal>
  );
}
