import styles from "./styles.module.scss";

export function Keyboard() {
  return (
    <>
      <div className={styles.keyboard}>
        <button className={styles.key} data-key="Q">
          Q
        </button>
        <button className={styles.key} data-key="W">
          W
        </button>
        <button className={styles.key} data-key="E">
          E
        </button>
        <button className={styles.key} data-key="R">
          R
        </button>
        <button className={styles.key} data-key="T">
          T
        </button>
        <button className={styles.key} data-key="Y">
          Y
        </button>
        <button className={styles.key} data-key="U">
          U
        </button>
        <button className={styles.key} data-key="I">
          I
        </button>
        <button className={styles.key} data-key="O">
          O
        </button>
        <button className={styles.key} data-key="P">
          P
        </button>
        <div className="space"></div>
        <button className={styles.key} data-key="A">
          A
        </button>
        <button className={styles.key} data-key="S">
          S
        </button>
        <button className={styles.key} data-key="D">
          D
        </button>
        <button className={styles.key} data-key="F">
          F
        </button>
        <button className={styles.key} data-key="G">
          G
        </button>
        <button className={styles.key} data-key="H">
          H
        </button>
        <button className={styles.key} data-key="J">
          J
        </button>
        <button className={styles.key} data-key="K">
          K
        </button>
        <button className={styles.key} data-key="L">
          L
        </button>
        <div className="space"></div>
        <button data-enter className={styles.key + " " + styles.large}>
          Enter
        </button>
        <button className={styles.key} data-key="Z">
          Z
        </button>
        <button className={styles.key} data-key="X">
          X
        </button>
        <button className={styles.key} data-key="C">
          C
        </button>
        <button className={styles.key} data-key="V">
          V
        </button>
        <button className={styles.key} data-key="B">
          B
        </button>
        <button className={styles.key} data-key="N">
          N
        </button>
        <button className={styles.key} data-key="M">
          M
        </button>
        <button className={styles.key + " " + styles.large}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              fill="var(--color-tone-1)"
              d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}
