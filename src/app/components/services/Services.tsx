import styles from "./services.module.css";
import Image from "next/image";

export default function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.title}>
        <h1>Meus serviços</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.textItem}>
            <h2>Crio seu site</h2>
            <h3>
              Tenha um site responsivo com as melhores tecnologias do mercado, rápido e otimizado para motores
              de busca.
            </h3>
          </div>

          <Image
            className={styles.imgIcon}
            src="/iconet.png"
            alt="Icone Internet"
            width={200}
            height={50}
          />
        </div>
        <div className={styles.item}>
        <div className={styles.textItem}>
          <h2>Sua presença online</h2>
          <h3>
            Coloco seu site nas primeiras posições do Google, utilizando
            otimização avançada para mecanismos de busca (SEO).
          </h3>
          </div>
          <Image
            className={styles.imgIcon}
            src="/grafico-de-barras.png"
            alt="gráfico de barras"
            width={200}
            height={50}
          />
        </div>
        <div className={styles.item}>
        <div className={styles.textItem}>
          <h2>Design de redes sociais</h2>
          <h3>
            Produzo artes e banners personalizados para suas postagens no
            Facebook, Instagram e WhatsApp, reforçando a identidade da sua
            marca.
          </h3>
          </div>
          <Image
            className={styles.imgIcon}
            src="/midia-social.png"
            alt="midias sociais"
            width={200}
            height={50}
          />
        </div>
        <div className={styles.item}>
        <div className={styles.textItem}>
          <h2>Hospedagem de excelência</h2>
          <h3>
            Ofereço hospedagem com servidores de alto desempenho e suporte
            especializado da MetropoleWeb, assegurando tranquilidade e
            estabilidade.
          </h3>
          </div>
          <Image
            className={styles.imgIcon}
            src="/nuvem.png"
            alt="Nuvem"
            width={200}
            height={50}
          />
        </div>
        <div className={styles.item}>
        <div className={styles.textItem}>
          <h2>Manutenção e criação de conteúdo</h2>
          <h3>
           
            Tenha um site responsivo em HTML5, rápido e otimizado para motores
            de busca.
          </h3> </div>
          <Image
            className={styles.imgIcon}
            src="/marketing-de-conteudo.png"
            alt="marketing de conteudo"
            width={200}
            height={50}
          />
        </div>
        <div className={styles.item}>
        <div className={styles.textItem}>
          <h2>Edição de vídeo profissional</h2>
          <h3>
            Edito seus vídeos para uso em sites, YouTube, Instagram ou Facebook,
            garantindo uma produção final de alta qualidade. *Sem captação de
            vídeo.
          </h3>
          </div>
          <Image
            className={styles.imgIcon}
            src="/edicao-de-video.png"
            alt="edicao de video"
            width={200}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
