import Link from "next/link";
import styles from "./Banner.module.css";

const BottomBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Big Summer <span>Sale</span>
        </h1>
        <div className={styles.subtitle}>
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </div>
        <Link
        href={`/products`}
          style={{ borderColor: "white", color: "white", marginTop: "4rem" }}
          className="button-outline"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default BottomBanner;
