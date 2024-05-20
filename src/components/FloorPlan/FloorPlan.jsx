import { TabStyle } from "../TabStyle/TabStyle";
import styles from "./FloorPlan.module.css";
import { Link } from "react-router-dom";
export function FloorPlan() {
  return (
    <TabStyle>
      <h1>Piętro 0</h1>
      <div className={styles.floorPlan_container}>
        <img src={`/pietro-0.jpg`} className={styles.floorPlan_img} />
        <div className={styles.buttons_container}>
          <Link to={`/wybierz-mieszkanie/mieszkanie/0`}>
            <button id={0} value={0} className={styles.floorPlan_btn}>
              0
            </button>
          </Link>
          <Link to={"/wybierz-mieszkanie/mieszkanie/1"}>
            <button id={1} value={1} className={styles.floorPlan_btn}>
              1
            </button>
          </Link>
          <Link to={"/wybierz-mieszkanie/mieszkanie/2"}>
            <button id={2} value={2} className={styles.floorPlan_btn}>
              2
            </button>
          </Link>
          <Link to={"/wybierz-mieszkanie/mieszkanie/3"}>
            <button id={3} value={3} className={styles.floorPlan_btn}>
              3
            </button>
          </Link>
        </div>
      </div>
    </TabStyle>
  );
}
