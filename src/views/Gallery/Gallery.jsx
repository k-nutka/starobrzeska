import { ScrollToTop } from "../../api/ScrollToTop";
import { TabStyle } from "../../components/TabStyle/TabStyle";
import styles from "./Gallery.module.css";
import { Link } from "react-router-dom";

export function Gallery() {
  ScrollToTop();
  return (
    <TabStyle>
      <h1>Galeria</h1>
      <div className={styles.gallery_container}>
        <div className={styles.gallery_block}>
          <Link to={"/galeria/zewnatrz"} className={styles.gallery_link}>
            <img className={styles.gallery_photo} src="/Image8.png"></img>
          </Link>
        </div>
        <div className={styles.gallery_block}>
          <Link to={"/galeria/wewnatrz"} className={styles.gallery_link}>
            <img className={styles.gallery_photo} src="/inside-1.jpg"></img>
          </Link>
        </div>
      </div>
    </TabStyle>
  );
}
