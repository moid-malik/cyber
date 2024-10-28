import Banner from "./VerticalBanner/Banner";
import styles from "./VerticalBanners.module.css";
import data from "./data";
const VerticalBanners = () => {
  return (
    <>
    <div className={styles.verticalbanners}>
      <Banner data={data} />
      <div className={styles.indicator}>
          <div className={styles.selecteddot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
    </div>
    
    </>
  );
};

export default VerticalBanners;
