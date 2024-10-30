"use client";
import styles from "./Card.module.css";
import { useState } from "react";
import { allProducts } from "@/data/productsData";
import Link from "next/link";

const ProductList = () => {
  const [Products, setProducts] = useState(allProducts || []);
  const displayLimit = 5;
  const startingIndex = 8;

  const toggleLike = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index] = {
        ...updatedProducts[index],
        liked: !updatedProducts[index].liked,
      };
      return updatedProducts;
    });
  };

  return (
    <>
      {Products.length > 0 ? (
        Products.slice(startingIndex, startingIndex + displayLimit).map((product, index) => {
          const originalIndex = startingIndex + index;

          return (
            <div key={originalIndex} className={styles.card}>
              <div className={styles.top}>
                <svg
                  className={styles.like}
                  onClick={() => toggleLike(originalIndex)}
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill={product.liked ? "red" : "none"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.93415 18.5443L15.3152 27.3569C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3569L26.0657 18.5443C28.6739 16.0942 28.9907 12.0622 26.797 9.2348L26.3845 8.70316C23.7603 5.32081 18.4928 5.88806 16.6488 9.75157C16.3883 10.2973 15.6115 10.2973 15.351 9.75157C13.5071 5.88806 8.23955 5.32081 5.61531 8.70316L5.20284 9.2348C3.00918 12.0622 3.32592 16.0942 5.93415 18.5443Z"
                    stroke={product.liked ? "none" : "#919191"}
                    strokeOpacity="0.77"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="imagewrapper"
              >
                <img
                  className={styles.productimage}
                  src={product.imagesource}
                  alt={product.producttitle}
                />
              </div>
              <div style={{ width: "100%" }} className={styles.productdetails}>
                <h5 style={{ fontWeight: "300" }} className={styles.producttitle}>
                  {product.producttitle.length > 29
                    ? `${product.producttitle.slice(0, 27)}...`
                    : product.producttitle}
                  <br />
                  <span className={styles.subtitle}>
                    {product.subtitle.length > 49
                      ? `${product.subtitle.slice(0, 46)}...`
                      : product.subtitle}
                  </span>
                </h5>
                <div className={styles.price}>${product.price}</div>
                <Link
                  href={`/products/details?productnumber=${originalIndex}`} 
                  style={{ position: "absolute", bottom: "25px" }}
                  className="button-filled"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          );
        })
      ) : null}
    </>
  );
};

export default ProductList;
