import styles from "./navbar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Logo</h1>
      </div>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#about">About</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#projects">Projects</Link>
          </li>
          <li className={styles.listItem}>Serviços</li>
          <li className={styles.listItem}>Contato</li>
        </ul>
      </nav>
    </div>
  );
}
