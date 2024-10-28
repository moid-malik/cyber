"use client";
import { useState, useEffect } from "react";
import { products } from "@/data/productsData";
import styles from "./Cards.module.css";

interface Product {
  producttitle: string;
  subtitle: string;
  price: number;
  imagesource: string;
  liked: boolean;
}

interface CardsProps {
  query: string | null;
}

const allProducts: Product[] = products.allProducts;

const Cards = ({ query }: CardsProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  useEffect(() => {
    const filterProducts = () => {
      if (!query) {
        setFilteredProducts(allProducts);
      } else {
        const filtered = allProducts.filter((product) =>
          product.producttitle.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    };
    filterProducts();
  }, [query]);

  const toggleLike = (index: number) => {
    const updatedProducts = filteredProducts.map((product, i) => {
      if (i === index) {
        return { ...product, liked: !product.liked };
      }
      return product;
    });
    setFilteredProducts(updatedProducts);
  };

  return (
    <>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <div key={product.producttitle} className={styles.card}>
            <div className={styles.top}>
              <svg
                className={styles.like}
                onClick={() => toggleLike(index)}
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
              <button
                style={{ position: "absolute", bottom: "25px" }}
                className="button-filled"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No products found matching your search criteria.</div>
      )}
    </>
  );
};

export default Cards;
