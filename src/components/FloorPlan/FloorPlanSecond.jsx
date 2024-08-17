import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FloorPlan.module.css";
import FLOOR from "/floor.jpg";
import { getAparmentStatus } from "../../api/apartmentService";


export function FloorPlanSecond() {
  const svgRef = useRef(null);
  const [viewBox, setViewBox] = useState("");
  const [status, setAparmentStatus] = useState("Wolne");
  const navigate = useNavigate();

  const apartments = [
    { id: "m-23", d: "M491,894 L503,531 L717,532 L712,738 L805,738 L808,895 Z" },
    { id: "m-24", d: "M488,880 L130,885 L150,534 L500,536 Z" },
    { id: "m-25", d: "M450,533 L153,531 L180,116 L467,117 Z" },
    { id: "m-26", d: "M466,115 L710,115 L705,451 L454,449 Z" },
    { id: "m-27", d: "M713,119 L964,115 L961,453 L706,456 Z" },
    { id: "m-28", d: "M964,117 L1212,117 L1217,456 L963,451 Z" },
    { id: "m-29", d: "M1215,117 L1468,115 L1475,449 L1217,458 Z" },
    { id: "m-30", d: "M1471,119 L1750,117 L1772,536 L1476,532 Z" },
    { id: "m-31", d: "M1437,534 L1772,543 L1787,892 L1451,890 Z" },
    { id: "m-32", d: "M1178,534 L1436,534 L1451,888 L1186,892 Z" },
    { id: "m-33", d: "M932,532 L1178,536 L1183,894 L924,892 Z" },
  ];

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

  const handleMouseEnter = async (aparmentName) => {
    setAparmentStatus(await getAparmentStatus(aparmentName))
  }

  return (
    <>
      <div className={styles.buildingContainer}>
        <h1>Wybierz mieszkanie - piętro II</h1>
        {viewBox && (
          <svg ref={svgRef} viewBox={viewBox} className={styles.buildingSvg}>
            <image href={FLOOR} x="0" y="0" />
            {apartments.map((apartment) => (
              <path
                key={apartment.id}
                className={`${styles.buildingArea} ${status === 'Zarezerwowane' ? styles.reserved : status == 'Sprzedane' ? styles.sold : styles.free} `}
                onClick={() => handleAreaClick(apartment.id)}
                onMouseEnter={() => handleMouseEnter(apartment.id)}
                d={apartment.d}
              />
            ))}
          </svg>
        )}
      </div>
    </>
  );
}
