import { SingInButton } from "../SingInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo" />
        <nav>
          <a className={styles.active}>Home</a>
          <a className={styles.desa}>Posts</a>
        </nav>
        <SingInButton />
      </div>
    </header>
  );
}
