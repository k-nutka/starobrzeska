import styles from "./FloorPlan.module.css";
import { TabStyle } from "../TabStyle/TabStyle";
export function FloorPlanSecond() {
  return (
    <TabStyle>
      <h1>Piętro II</h1>
      <div className={styles.floorPlan_container}>
        <img src={`/pietro-2.jpg`} className={styles.floorPlan_img} />
        <div className={styles.buttons_container}>
          <button id={8} value={8} className={styles.floorPlan_btn}>
            8
          </button>
          <button id={9} value={9} className={styles.floorPlan_btn}>
            9
          </button>
          <button id={10} value={10} className={styles.floorPlan_btn}>
            10
          </button>
          <button id={11} value={11} className={styles.floorPlan_btn}>
            11
          </button>
        </div>
      </div>
    </TabStyle>
  );
}
