"use client";
import styles from "./MiniBanners.module.css";
import { allProducts } from "@/data/productsData"; // Assuming the products array now contains banner information
import Link from "next/link";
import { useRouter } from "next/navigation";

const MiniBanners = () => {
  const router = useRouter();

  const [leftBannerOne, leftBannerTwo, leftBannerThree, rightBanner] =
    allProducts.slice(0, 4);

  return (
    <div className={styles.minibanners}>
      <div className={styles.leftbanners}>
        <div
          onClick={() =>
            router.push(`/products/details?productnumber=0`)
          }
          className={styles.widesquare}
        >
          <img
            src={leftBannerOne.imagesource}
            alt={leftBannerOne.producttitle}
          />
          <div>
            <h1>{leftBannerOne.producttitle}</h1>
            <p className={styles.widesquaredesc}>{leftBannerOne.description}</p>
          </div>
        </div>

        <div className={styles.squarescontainer}>
          <div
            onClick={() => router.push(`/products/details?productnumber=1`)}
            style={{ backgroundColor: leftBannerTwo.bgColor || "#EDEDED" }}
            className={styles.square1}
          >
            <img
              src={leftBannerTwo.imagesource}
              alt={leftBannerTwo.producttitle}
            />
            <div className={styles.info}>
              <h1>
                {leftBannerTwo.producttitle.split(" ")[0]}
                <br />
                {leftBannerTwo.producttitle.split(" ")[1]}
                <br />
                <span>{leftBannerTwo.producttitle.split(" ")[2]}</span>
              </h1>
              <p className={styles.desc}>{leftBannerTwo.description}</p>
            </div>
          </div>

          <div
            onClick={() => router.push(`/products/details?productnumber=2`)}
            style={{
              backgroundColor: leftBannerThree.bgColor || "#353535",
              color: "white",
            }}
            className={styles.square2}
          >
            <img
              src={leftBannerThree.imagesource}
              alt={leftBannerThree.producttitle}
            />
            <div className={styles.info}>
              <h1>
                {leftBannerThree.producttitle.split(" ")[0]}
                <br />
                {leftBannerThree.producttitle.split(" ")[1]}
                <br />
                <span>{leftBannerThree.producttitle.split(" ")[2]}</span>
              </h1>
              <p className={styles.desc}>{leftBannerThree.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: rightBanner.bgColor || "#EDEDED" }}
        className={styles.largebanner}
      >
        <div className={styles.info}>
          <h1>
            {rightBanner.producttitle.split(" ")[0]} <br />{" "}
            <span>{rightBanner.producttitle.split(" ")[1]}</span>
          </h1>
          <p className={styles.desc}>{rightBanner.description}</p>
          <Link
            href={`/products/details?productnumber=3`}
            className={"button-outline"}
          >
            {rightBanner.buttonLabel || "Shop now"}
          </Link>
        </div>
        <img src={rightBanner.imagesource} alt={rightBanner.producttitle} />
      </div>
    </div>
  );
};

export default MiniBanners;
