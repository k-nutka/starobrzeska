import styles from "./PhotoSlider.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export function PhotoSlider({ photos, startIndex, setShowSlider }) {
  const images = photos;

  const properties = {
    duration: 5000, // czas trwania jednego slajdu w milisekundach (5 sekund w tym przypadku)
    transitionDuration: 500, // czas trwania przejścia między slajdami
    infinite: true, // zapętlanie prezentacji
    indicators: true, // pokazuje wskaźniki slajdów
    arrows: true, // pokazuje strzałki nawigacyjne
    defaultIndex: startIndex,
    autoPlay: false,
  };

  const onCloseClickHandler = () => {
    setShowSlider(false);
  };

  return (
    <div className={styles.slideContainer}>
      <button onClick={onCloseClickHandler} className={styles.closeBtn}>
        X
      </button>
      <div className={styles.Slide}>
        <Slide {...properties}>
          {images.map((each, index) => (
            <div key={index} className={styles.eachStyle}>
              <div className={styles.imageContainer}>
                <div className={styles.innerImgContainer}>
                  <img
                    className={styles.imagePhoto}
                    src={each}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}
