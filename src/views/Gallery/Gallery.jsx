import { TabStyle } from "../../components/TabStyle/TabStyle";
import styles from "./Gallery.module.css";
import { Link } from "react-router-dom";

export function Gallery() {
  return (
    <TabStyle>
      <h1>Galeria</h1>
      <div className={styles.gallery_container}>
        <div className={styles.gallery_block}>
          <Link to={"/galeria/zewnatrz"} className={styles.gallery_link}>
            <img
              className={styles.gallery_photo}
              src="/src/assets/slider-1.jpg"
            ></img>
          </Link>
        
        </div>
        <div className={styles.gallery_block}>
          <Link to={"/galeria"} className={styles.gallery_link}>
            <img
              className={styles.gallery_photo}
              src="/src/assets/photo-1.jpg"
            ></img>
          </Link>
         
        </div>
      </div>
    </TabStyle>
  );
}
