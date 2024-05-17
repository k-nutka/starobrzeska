import styles from "./FloorPlan.module.css";
export function FloorPlan({ choosenFloor }) {
  return (
    <>
      <div className={styles.floorPlan_container}>
        <img
          src={`/pietro-${choosenFloor}.jpg`}
          className={styles.floorPlan_img}
        />
        <div className={styles.buttons_container}>
          <button id={0} value={0} className={styles.floorPlan_btn}>
            0
          </button>
          <button id={1} value={1} className={styles.floorPlan_btn}>
            1
          </button>
          <button id={2} value={2} className={styles.floorPlan_btn}>
            2
          </button>
          <button id={3} value={3} className={styles.floorPlan_btn}>
            3
          </button>
        </div>
      </div>
    </>
  );
}
