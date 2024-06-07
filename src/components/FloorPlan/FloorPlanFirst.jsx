import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FloorPlan.module.css";
import FLOOR from "/floor.jpg";

export function FloorPlanFirst() {
  const svgRef = useRef(null);
  const [viewBox, setViewBox] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = FLOOR;
    img.onload = () => {
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      setViewBox(`0 0 ${imgWidth} ${imgHeight}`);
    };
  }, []);

  const handleAreaClick = (floor) => {
    navigate(`/wybierz-mieszkanie/mieszkanie/${floor}`);
  };

  return (
    <>
      <div className={styles.buildingContainer}>
        <h1>Wybierz mieszkanie - piętro I</h1>
        {viewBox && (
          <svg ref={svgRef} viewBox={viewBox} className={styles.buildingSvg}>
            <image href={FLOOR} x="0" y="0" />
            <path
              className={styles.buildingArea}
              onClick={() => handleAreaClick("m-111")}
              d="M491,894 L503,531 L717,532 L712,738 L805,738 L808,895 Z"
            />
            <path
              className={styles.buildingArea}
              onClick={() => handleAreaClick("m-12")}
              d="M488,880 L130,885 L150,534 L500,536 Z"
            />
            <path
              className={styles.buildingArea}
              onClick={() => handleAreaClick("m-13")}
              d="M450,533 L153,531 L180,116 L467,117 Z"
            />
            <path
              className={styles.buildingArea}
              onClick={() => handleAreaClick("m-14")}
              d="M466,115 L710,115 L705,451 L454,449 Z"
            />
            <path
              className={styles.buildingArea}
              onClick={() => handleAreaClick("m-15")}
              d="M713,119 L964,115 L961,453 L706,456 Z"
            />
            <path
              className={styles.buildingArea}
              onClick={() => handleAreaClick("m-16")}
              d="M964,117 L1212,117 L1217,456 L963,451 Z"
            />
            <path
              className={styles.buildingArea}
              onClick={() => handleAreaClick("m-17")}
              d="M1215,117 L1468,115 L1475,449 L1217,458 Z"
            />
            <path
              className={styles.buildingArea}
              onClick={() => handleAreaClick("m-18")}
              d="M1471,119 L1750,117 L1772,536 L1476,532 Z"
            />
            <path
              className={styles.buildingArea}
              onClick={() => handleAreaClick("m-19")}
              d="M1437,534 L1772,543 L1787,892 L1451,890 Z"
            />
            <path
              className={styles.buildingArea}
              onClick={() => handleAreaClick("m-110")}
              d="M1178,534 L1436,534 L1451,888 L1186,892 Z"
            />
            <path
              className={styles.buildingArea}
              onClick={() => handleAreaClick("m-111")}
              d="M932,532 L1178,536 L1183,894 L924,892 Z"
            />
          </svg>
        )}
      </div>
    </>
  );
}
