import styles from "./Bulding.module.css";
import BULDING from "/bulding.jpg";

export function Bulding({ setChoosenFloor }) {
  const onBuldingButtonHandler = (e) => {
    setChoosenFloor(e.target.value);
  };
  return (
    <>
      <div className={styles.bulding_container}>
        <img src={BULDING} className={styles.bulding_img} />
        <div className={styles.buttons_container}>
          <button
            onClick={(e) => onBuldingButtonHandler(e)}
            id={0}
            value={0}
            className={styles.bulding_btn}
          >
            0
          </button>
          <button
            onClick={(e) => onBuldingButtonHandler(e)}
            id={1}
            value={1}
            className={styles.bulding_btn}
          >
            1
          </button>
          <button
            onClick={(e) => onBuldingButtonHandler(e)}
            id={2}
            value={2}
            className={styles.bulding_btn}
          >
            2
          </button>
          <button
            onClick={(e) => onBuldingButtonHandler(e)}
            id={3}
            value={3}
            className={styles.bulding_btn}
          >
            3
          </button>
        </div>
      </div>
    </>
  );
}
