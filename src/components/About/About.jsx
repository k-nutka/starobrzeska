import { ChooseBtn } from "../ChooseBtn/ChooseBtn";
import styles from "./About.module.css";

export function About() {
  return (
    <div className={styles.about_container} id="o-inwestycji">
      <h1>O inwestycji</h1>
      <div className={styles.about_frame}>
        <div className={styles.about_block}>
          <img
            className={styles.about_photo}
            src={"/Image3.png"}
            alt={"wizualizacja-1"}
          />
          <div className={styles.about_text}>
            <h2>Architektura</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              et soluta in id magnam recusandae vero officiis deserunt, aliquam
              excepturi?
            </p>
          </div>
        </div>
        <div className={styles.about_block}>
          <div className={styles.about_text}>
            <h2>Lokalizacja</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              illum id laudantium neque impedit optio expedita fuga libero enim
              quae, saepe voluptatem soluta. Eligendi saepe totam pariatur
              facere doloremque quod?
            </p>
          </div>
          <img
            className={styles.about_photo}
            src={"/Image16.png"}
            alt={"wizualizacja-2"}
          />
        </div>
        <div className={styles.about_block}>
          <img
            className={styles.about_photo}
            src={"/Image19.png"}
            alt={"wizualizacja-3"}
          />
          <div className={styles.about_text}>
            <h2>Jakość materiałów</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              repellendus nam debitis quasi officia molestias fuga reiciendis
              laborum sapiente dolorum numquam doloremque, corporis blanditiis
              sit dicta, beatae doloribus laudantium voluptatibus!
            </p>
          </div>
        </div>
      </div>

      <ChooseBtn>Wybierz mieszkanie</ChooseBtn>
    </div>
  );
}
