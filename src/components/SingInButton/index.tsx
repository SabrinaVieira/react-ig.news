import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { useSession, signIn, signOut } from "next-auth/client";

export function SingInButton() {
  const [session] = useSession();

  console.log(session);
  return session ? (
    <button
      type="button"
      className={styles.sigInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="04d361" />
      {session.user.name}
      <FiX color="#7377380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.sigInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="eba417" />
      Sing in with github
    </button>
  );
}
