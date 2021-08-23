//import { FaGithub } from "react-icons/fa";
//import { FiX } from "react-icons/fi";
import Image from "next/image";
import styles from "./style.module.scss";
import githubicon from "../../../public/githubicon.png";

export function SingInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.sigInButton}>
      {/* <Image src={githubicon} alt="github icon" className={styles.image} /> */}
      <img src="/githubicon.png" alt="github icon" s />
      {/* <FaGithub color="04d361"/> */}
      {/* <FiX className={styles.closeIcon} color="#7377380" /> */}
      Sabrina Vieira
    </button>
  ) : (
    <button type="button" className={styles.sigInButton}>
      {/* <Image src={githubicon} alt="github icon" className={styles.image} /> */}
      <img src="/githubicon.png" alt="github icon" s />
      {/* <FaGithub color="eba417"/> */}
      Sing in with github
    </button>
  );
}
