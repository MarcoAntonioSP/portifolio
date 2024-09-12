import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.background}>
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        {/* Logo ou nome da marca */}
        <h1>Dev Front-End</h1>

        <div className={styles.info}>
          <p>
            {/* Informações de contato */}
            <a href="mailto:marco.agostinoo@hotmail.com">Entre em contato</a>
          </p>
          <p>
            {/* Redes sociais */}
            <a href="https://www.linkedin.com/in/seuperfil">LinkedIn</a> |
            <a href="https://www.github.com/seurepositorio">GitHub</a>
          </p>
          <p>
            {/* Copyright */}
            &copy; {new Date().getFullYear()} Marco A. D Agostino
          </p>
          <p>
            {/* Link para o topo */}
            <a href="#top">Voltar ao topo</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
