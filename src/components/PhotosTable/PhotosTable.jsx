import { useState } from "react";
import styles from "./PhotosTable.module.css";
import { PhotoSlider } from "../../components/PhotoSlider/PhotoSlider";
import { ScrollToTop } from "../../api/ScrollToTop";

export function PhotosTable({ photos }) {
  const [showSlider, setShowSlider] = useState(false);
  const [startIndex, setStartIndex] = useState(null);
  const onImageClickHandler = (index) => {
    ScrollToTop();
    setStartIndex(index);
    setShowSlider(true);
  };
  const onCloseClickHandler = () => {
    setShowSlider(false);
  };

  return (
    <>
      <div
        className={`${styles.photos_container} ${
          showSlider ? styles.blur : ""
        }`}
      >
        {photos.map((photo, index) => {
          return (
            <img
              onClick={() => onImageClickHandler(index)}
              className={styles.photoStyle}
              key={index}
              src={photo}
            ></img>
          );
        })}
      </div>
      <div>
        {showSlider && (
          <div>
            <button onClick={onCloseClickHandler} className={styles.closeBtn}>
              X
            </button>
            <PhotoSlider
              photos={photos}
              startIndex={startIndex}
              setShowSlider={setShowSlider}
            />
          </div>
        )}
      </div>
    </>
  );
}
