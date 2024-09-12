import styles from "./projects.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Projects() {
  return (
    <div id="projects">
      <div className={styles.title}>
        <h1>PROJETOS</h1>
        <h2>Explore meu portfólio.</h2>
      </div>

      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.item}>
            <Image
              className={styles.imgItem}
              src="https://i.ibb.co/CbmWwnj/Captura-de-Tela-8.png"
              alt="Description"
              width={500}
              height={300}
            />
            <h3>LcCopper Metalúrgica</h3>
            <p>
              Site criado para a LcCopper, uma metalúrgica especializada em
              peças para soldagem e automação industrial.
            </p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              href="https://lc-copper.vercel.app/"
            >
              ➔ Saiba mais
            </Link>
          </div>
          <div className={styles.item}>
            <Image
              className={styles.imgItem}
              src="https://i.ibb.co/P5MXpXM/Captura-de-Tela-12.png"
              alt="Description"
              width={500}
              height={300}
            />
            <h3>Clima Já</h3>
            <p>
              Aplicação desenvolvida para praticar o consumo de api's de
              terceiros e praticar html, css e javascript.
            </p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              href="https://marcoagostinoo.github.io/climaagora/"
            >
              ➔ Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
