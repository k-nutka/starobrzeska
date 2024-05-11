import styles from "./PhotoSlider.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export function PhotoSlider({ photos, startIndex }) {
  const images = photos;

  const properties = {
    duration: 5000, // czas trwania jednego slajdu w milisekundach (5 sekund w tym przypadku)
    transitionDuration: 500, // czas trwania przejścia między slajdami
    infinite: true, // zapętlanie prezentacji
    indicators: true, // pokazuje wskaźniki slajdów
    arrows: true, // pokazuje strzałki nawigacyjne
    defaultIndex: startIndex,
  };

  return (
    <div className={styles.slideContainer}>
      <div className={styles.Slide}>
        <Slide {...properties}>
          {images.map((each, index) => (
            <div key={index} className={styles.eachStyle}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.imagePhoto}
                  src={each}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}
