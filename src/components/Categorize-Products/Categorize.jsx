import styles from "./Categorize.module.css";
const Categorize = ({ categories }) => {
  return (
    <div className={styles.categorizer}>
      <div className={styles.content}>
        <div className={styles.toggler}>
          <h3>Browse By Category </h3>
          <span>
            <img src="/Arrow.png" />
            <img src="ArrowRight.png" />
          </span>
        </div>
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <div key={index} className={styles.category}>
              <div className="icon">
                {category.icon}
                <p>{category.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorize;
