import Modal from "react-modal";

interface TutorialProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function Tutorial({ isOpen, onRequestClose }: TutorialProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <p>
        Você tem 6 tentativas para acertar a palavra, Depois de cada tentativa,
        as peças mostram seu progresso
      </p>
      <img src="/WordExample.png" alt="" />
      <p>
        Letras com o fundo <span className="greenText">Verde</span> estão na
        palavra e estão na posição correta.
      </p>
      <p>
        Letras com o fundo <span className="yellowText">Amarelo</span> estão na
        palavra mas estão em outra posição.
      </p>
      <p>
        Letras com o fundo <span className="grayText">Cinza</span> não fazem
        parte da palavra
      </p>
      <div className="tutorialBottomContainer">
        <p className="firstP">Uma palavra nova é escolhida a cada dia.</p>
        <p>Palavras podem ter letras repetidas.</p>
      </div>
      <h1 className="goodLuck">Boa Sorte :)</h1>
    </Modal>
  );
}
