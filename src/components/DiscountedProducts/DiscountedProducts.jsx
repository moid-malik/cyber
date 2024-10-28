import styles from "./DiscountedProducts.module.css";
import ProductList from "./Card/Card";
const DiscountedProducts = () => {
  return (
    <div className={styles.discounted}>
      <div className={styles.heading}>Discounts up to -50%</div>
      <div className={styles.products}>
        <ProductList/>
      </div>
    </div>
  );
};

export default DiscountedProducts;
