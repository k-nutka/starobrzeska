import styles from "./ChooseApartment.module.css";
import { TabStyle } from "../../components/TabStyle/TabStyle";
import BULDING from "/bulding.png";
import { Link } from "react-router-dom";

export function ChooseApartment() {
  return (
    <TabStyle>
      <h1>Wybierz mieszkanie </h1>
      <div className={styles.bulding_container}>
        <img src={BULDING} className={styles.bulding_img} />
        <div className={styles.buttons_container}>
          <Link to={`/wybierz-mieszkanie/pietro/0`}>
            <button id={0} value={0} className={styles.bulding_btn}>
              0
            </button>
          </Link>
          <Link to={`/wybierz-mieszkanie/pietro/1`}>
            <button id={1} value={1} className={styles.bulding_btn}>
              1
            </button>
          </Link>
          <Link to={`/wybierz-mieszkanie/pietro/2`}>
            <button id={2} value={2} className={styles.bulding_btn}>
              2
            </button>
          </Link>
          <Link to={`/wybierz-mieszkanie/pietro/3`}>
            <button id={3} value={3} className={styles.bulding_btn}>
              3
            </button>
          </Link>
        </div>
      </div>
    </TabStyle>
  );
}
