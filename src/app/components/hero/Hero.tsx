import styles from "./hero.module.css";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <section className={styles.textLeft}>
        <h2 className={styles.ola}>Olá, eu sou</h2>
        <h1>Marco A. D&apos;Agostino</h1> {/* Escaped single quote */}
        <h2 className={styles.text2}>
          Um programador <span className={styles.highlight}>front-end</span> de
          <span className={styles.highlight2}>São Paulo</span>
        </h2>
        <p>
          Desenvolvedor front-end de São Paulo, criando
          <br /> interfaces elegantes e funcionais com uma paixão <br /> por
          inovação e design de impacto.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Download CV</button>
          <button className={styles.button2}>Contato</button>
          <div className={styles.socialLinks}>
            <button>
              <FaInstagramSquare className={styles.btnSocial} />
            </button>
            <button>
              <SiGithub className={styles.btnSocial} />
            </button>
            <button>
              <FaLinkedin className={styles.btnSocial} />
            </button>
          </div>
        </div>
      </section>
      <div>
        <Image
          className={styles.imgperfil}
          src="https://i.ibb.co/k0q8KW4/Captura-de-Tela-6-Bu-Tlhb-Wak-transformed-removebg-preview-1-removebg-preview.png"
          alt="Description"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
