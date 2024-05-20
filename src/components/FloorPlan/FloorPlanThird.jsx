import { TabStyle } from "../TabStyle/TabStyle";
import styles from "./FloorPlan.module.css";
export function FloorPlanThird() {
  return (
    <TabStyle>
      <h1>Piętro III</h1>
      <div className={styles.floorPlan_container}>
        <img src={`/pietro-3.jpg`} className={styles.floorPlan_img} />
        <div className={styles.buttons_container}>
          <button id={12} value={12} className={styles.floorPlan_btn}>
            12
          </button>
          <button id={13} value={13} className={styles.floorPlan_btn}>
            13
          </button>
          <button id={14} value={14} className={styles.floorPlan_btn}>
            14
          </button>
          <button id={15} value={15} className={styles.floorPlan_btn}>
            15
          </button>
        </div>
      </div>
    </TabStyle>
  );
}
