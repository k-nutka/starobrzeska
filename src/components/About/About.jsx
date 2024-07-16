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
              Mieszkania w&nbsp;ramach inwestycji Starobrzeska zaprojektowano
              z&nbsp;myślą o&nbsp;harmonijnym połączeniu nowoczesnych trendów
              architektonicznych z&nbsp;funkcjonalnością. Każdy detal został
              starannie przemyślany, aby&nbsp;tworzyć spójną i&nbsp;atrakcyjną
              całość. Dotakowymi atutami inwestycji są garaże podziemne, komórki
              lokatorskie, winda oraz&nbsp; miejsca postojowe na&nbsp;zewnątrz.
            </p>
          </div>
        </div>
        <div className={styles.about_block}>
          <div className={styles.about_text}>
            <h2>Lokalizacja</h2>
            <p>
              Inwestycja Starobrzeska jest położona w&nbsp;strategicznym
              miejscu, które&nbsp;zapewnia łatwy dostęp do&nbsp;wszelkich
              udogodnień miejskich. Bliskość szkół, przedszkoli, sklepów,
              Letnego Basenu Brzeskiego, a&nbsp;także przystanków komunikacji
              miejskiej sprawia, że&nbsp;codzienne życie staje&nbsp;się
              wyjątkowo wygodne.
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
              Inwestycja Starobrzeska to&nbsp;synonim najwyższej jakości,
              zarówno pod&nbsp;względem architektury, jak&nbsp;i&nbsp;użytych
              materiałów budowlanych. Każdy element, od&nbsp;fundamentów
              po&nbsp;wykończenie wnętrz, został starannie dobrany,
              aby&nbsp;zapewnić przyszłym mieszkańcom komfort, bezpieczeństwo
              i&nbsp;trwałość na&nbsp;lata.
            </p>
          </div>
        </div>
      </div>

      <ChooseBtn>Wybierz mieszkanie</ChooseBtn>
    </div>
  );
}
