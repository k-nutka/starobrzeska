import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FloorPlan.module.css";
import PARTER from "/parter.jpg";

export function FloorPlan() {
  const svgRef = useRef(null);
  const [viewBox, setViewBox] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = PARTER;
    img.onload = () => {
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      setViewBox(`0 0 ${imgWidth} ${imgHeight}`);
    };
  }, []);

  const handleAreaClick = (room) => {
    navigate(`/wybierz-mieszkanie/mieszkanie/${room}`);
  };

  return (
    <div className={styles.buildingContainer}>
      <h1>Wybierz mieszkanie - parter</h1>
      {viewBox && (
        <svg ref={svgRef} viewBox={viewBox} className={styles.buildingSvg}>
          <image href={PARTER} x="0" y="0" />
          <path
            className={styles.buildingArea}
            onClick={() => handleAreaClick("m-01")}
            d="M698,878 L491,882 L505,527 L706,531 Z"
          />
          <path
            className={styles.buildingArea}
            onClick={() => handleAreaClick("m-02")}
            d="M160,522 L508,527 L488,883 L135,880 Z"
          />
          <path
            className={styles.buildingArea}
            onClick={() => handleAreaClick("m-03")}
            d="M452,532 L160,531 L189,117 L472,120 Z"
          />
          <path
            className={styles.buildingArea}
            onClick={() => handleAreaClick("m-04")}
            d="M472,117 L717,119 L706,451 L454,451 Z"
          />
          <path
            className={styles.buildingArea}
            onClick={() => handleAreaClick("m-05")}
            d="M720,115 L964,117 L961,453 L706,454 Z"
          />
          <path
            className={styles.buildingArea}
            onClick={() => handleAreaClick("m-06")}
            d="M959,119 L1214,120 L1215,454 L961,456 Z"
          />
          <path
            className={styles.buildingArea}
            onClick={() => handleAreaClick("m-07")}
            d="M1215,120 L1461,124 L1473,461 L1214,454 Z"
          />
          <path
            className={styles.buildingArea}
            onClick={() => handleAreaClick("m-08")}
            d="M1463,125 L1743,122 L1760,537 L1473,534 Z"
          />
          <path
            className={styles.buildingArea}
            onClick={() => handleAreaClick("m-09")}
            d="M1434,541 L1765,543 L1783,882 L1444,892 Z"
          />
          <path
            className={styles.buildingArea}
            onClick={() => handleAreaClick("m-010")}
            d="M1168,532 L1431,532 L1441,887 L1175,885 Z"
          />
          <path
            className={styles.buildingArea}
            onClick={() => handleAreaClick("m-011")}
            d="M924,534 L1168,534 L1176,890 L924,890 Z"
          />
        </svg>
      )}
    </div>
  );
}
