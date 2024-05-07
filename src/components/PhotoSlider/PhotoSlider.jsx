import Slider from "react-slick";
import styles from "./PhotoSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function PhotoSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log("settings:", settings); // Dodaj logi dla ustawień Slidera

  return (
    <div className={styles.mainSlider}>
      <Slider {...settings}>
        <div className={styles.photoDiv}>
          <img className={styles.photo} src="/src/assets/slider-1.jpg"></img>
        </div>
        <div className={styles.photoDiv}>
          <img className={styles.photo} src="/src/assets/slider-2.jpg"></img>
        </div>
        <div className={styles.photoDiv}>
          <img className={styles.photo} src="/src/assets/slider-3.jpg"></img>
        </div>
      </Slider>
    </div>
  );
}
