import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SingInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.sigInButton}>
      <FaGithub color="04d361" />
      Sabrina Vieira
      <FiX color="#7377380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.sigInButton}>
      <FaGithub color="eba417" />
      Sing in with github
    </button>
  );
}
