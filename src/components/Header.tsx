import styles from "./Header.module.css";
import todoLogo from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="logo da aplicação" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
}
