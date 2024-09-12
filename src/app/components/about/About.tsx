import styles from "./about.module.css";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
export default function About() {
  return (
    <div id="about" className={styles.hero}>
      <div className={styles.imgBox}>
        <Image
          className={styles.imgLeft}
          src="https://i.ibb.co/RDCmMBt/eu-removebg-preview.png"
          alt="Description"
          width={500}
          height={300}
        />
      </div>
      <section className={styles.textLeft}>
        <h2 className={styles.ola}>Sobre Mim</h2>
        <h2 className={styles.text2}>Sou um Desenvolvedor Front End</h2>
        <p>
          Especializado em criar experiências digitais excepcionais, transformo{" "}
          <br />
          designs em interfaces interativas e eficientes. Possuo um sólido
          <br />
          conhecimento em HTML, CSS, JavaScript e React. Meu objetivo é<br />
          contribuir para projetos inovadores, utilizando as melhores práticas
          <br />
          de desenvolvimento para entregar soluções de alta qualidade.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Contate-me</button>
        </div>
      </section>
    </div>
  );
}
