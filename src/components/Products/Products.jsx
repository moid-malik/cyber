"use client";
import Card from "./Cards/Cards";
import styles from "./Products.module.css";
import { useState } from "react";
function Products() {
  const [tab, setTab] = useState("newarrival");
  return (
    <div className={styles.products}>
      <div className={styles.productsnavigation}>
        <a
          className={tab === "newarrival" ? styles.selected : ""}
          onClick={() => setTab("newarrival")}
        >
          New Arrival
        </a>
        <a
          className={tab === "bestSeller" ? styles.selected : ""}
          onClick={() => setTab("bestSeller")}
        >
          Bestseller
        </a>
        <a
          className={tab === "featuredProducts" ? styles.selected : ""}
          onClick={() => setTab("featuredProducts")}
        >
          Featured Products
        </a>
      </div>
      <div className={styles.productscards}>
        <Card tab={tab} />
      </div>
    </div>
  );
}

export default Products;
