import styles from "./MainSlider.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { SLIDER } from "../../constants/galleryPhotos";

export function MainSlider() {
  const images = SLIDER;

  const properties = {
    duration: 5000, // czas trwania jednego slajdu w milisekundach (5 sekund w tym przypadku)
    transitionDuration: 500, // czas trwania przejścia między slajdami
    infinite: true, // zapętlanie prezentacji
    indicators: true, // pokazuje wskaźniki slajdów
    arrows: false, // pokazuje strzałki nawigacyjne
  };

  return (
    <div className={styles.slideContainer}>
      <Slide {...properties}>
        {images.map((each, index) => (
          <div key={index} className={styles.eachStyle}>
            <div className={styles.imageContainer}>
              <img src={each} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
