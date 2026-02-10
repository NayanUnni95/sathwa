import { useState, useEffect } from "react";
import { urls } from "@/data/cult";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import styles from "./CulturalContainer.module.css";

function CulturalContainer() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  const [isAnimationStart, setIsanimationStart] = useState(false);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setIsanimationStart(true);
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = width <= 425 ? [1, 2] : [1, 2, 3];
  const row = width <= 425 ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4];

  return (
    <div className={styles.culturalContainer}>
      <div className={styles.culturalInnerContainer}>
        {row.map((rowItem) => {
          const rowIndex = row.indexOf(rowItem);
          return (
            <div className={styles.gridContainer} key={`row-${rowItem}`}>
              {data.map((dataItem) => {
                const colIndex = data.indexOf(dataItem);
                const imageSetIndex =
                  (rowIndex * data.length + colIndex) % urls.length;
                return (
                  <div className={styles.container} key={`col-${dataItem}`}>
                    <div className={styles.culturalPhotoCell}>
                      <ImageCarousel
                        imgSet={urls[imageSetIndex]}
                        animation={isAnimationStart}
                        dir={rowIndex % 2 === 0 ? "rtl" : "ltr"}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        {/* <div className={styles.textArea}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className={styles.pro}>CULt</span>
            <span className={styles.show}>EVE</span>
          </div>
          <div className={styles.name}>
            <h1>Mubas Ok</h1>
            <h1 className={styles.name2}>Rohith</h1>
            <h1 className={styles.name3}>Zain Huzain</h1>
          </div>
          <div className={styles.date}>
            <h1>Mar 7</h1>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CulturalContainer;
