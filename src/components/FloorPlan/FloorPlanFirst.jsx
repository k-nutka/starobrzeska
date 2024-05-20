import styles from "./FloorPlan.module.css";
import { TabStyle } from "../TabStyle/TabStyle";
export function FloorPlanFirst() {
  return (
    <TabStyle>
      <h1>Piętro I</h1>
      <div className={styles.floorPlan_container}>
        <img src={`/pietro-1.jpg`} className={styles.floorPlan_img} />
        <div className={styles.buttons_container}>
          <button id={4} value={4} className={styles.floorPlan_btn}>
            4
          </button>
          <button id={5} value={5} className={styles.floorPlan_btn}>
            5
          </button>
          <button id={6} value={6} className={styles.floorPlan_btn}>
            6
          </button>
          <button id={7} value={7} className={styles.floorPlan_btn}>
            7
          </button>
        </div>
      </div>
    </TabStyle>
  );
}
