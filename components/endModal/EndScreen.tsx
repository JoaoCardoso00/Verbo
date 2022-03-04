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
    </Modal>
  );
}
