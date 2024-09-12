import Image from "next/image";
import styles from "./skills.module.css";

export default function Skill() {
  return (
    <div className={styles.skills}>
      <h1>Tecnologias que possuo conhecimento</h1>
      <div className={styles.body}>
        <div className={styles.containerGrid}>
          <div className={styles.item}>
            <Image
              className={styles.itemStyles}
              src="https://i.ibb.co/tZphJ1F/html5-removebg-preview.png"
              alt="HTML5"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.itemStyles}
              src="https://i.ibb.co/4sVwwKV/js-removebg-preview-3.png"
              alt="JavaScript"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.itemStyles}
              src="https://i.ibb.co/L5ZXyrx/Daco-4562295.png"
              alt="React"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.itemStyles}
              src="https://i.ibb.co/FwJvjsV/js-removebg-preview.png"
              alt="JavaScript"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.itemStyles}
              src="https://i.ibb.co/KwKGz5H/js-removebg-preview-2.png"
              alt="JavaScript"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>

          <div className={styles.item}>
            <Image
              className={styles.itemStyles}
              src="https://i.ibb.co/svF4sr2/js-removebg-preview-4.png"
              alt="JavaScript"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.itemStyles}
              src="https://i.ibb.co/Hrsvd8V/pngegg-removebg-preview.png"
              alt="Other Technology"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.itemStyles}
              src="https://i.ibb.co/4tfGP3C/next-js-256x256.png"
              alt="Next.js"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.itemStyles}
              src="https://i.ibb.co/28zXRrH/js.png"
              alt="JavaScript"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.itemStyles}
              src="https://i.ibb.co/vL3r1hL/js-removebg-preview-5.png"
              alt="JavaScript"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.itemStyles}
              src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
              alt="Express.js"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.itemStyles}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROary_QdXQL1rf9oBpO9T9bl5waWE4nH9Gjw&s"
              alt="Other Technology"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
        </div>
      </div>
    </div>
  );
}
