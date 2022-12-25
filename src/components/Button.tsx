import styles from "./Button.module.css";
import { PlusCircle } from "phosphor-react";

interface PropsButton {
  onClick: () => void;
  disabled: boolean;
}

export function Button({ onClick, disabled }: PropsButton) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      Criar <PlusCircle />
    </button>
  );
}
