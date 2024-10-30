import Banner from "./VerticalBanner/Banner";
import styles from "./VerticalBanners.module.css";
import { allProducts } from "@/data/productsData"; // Updated to import products directly

const VerticalBanners = () => {
  const verticalBanners = allProducts.filter(product => allProducts.isVerticalBanner);

  return (
    <>
      <div className={styles.verticalbanners}>
        <Banner data={verticalBanners} />
        <div className={styles.indicator}>
          {verticalBanners.map((_, index) => (
            <div key={index} className={index === 0 ? styles.selecteddot : styles.dot}></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VerticalBanners;
