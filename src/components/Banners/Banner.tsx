import Link from "next/link";
import styles from "./Banners.module.css";
import MiniBanners from "./Mini-Banners/MiniBanners";
import { allProducts } from "@/data/productsData";

const Banners = () => {
  const mainBanner = allProducts[4];
  const bannerTitle = mainBanner.producttitle;

  const containsAllLetters = (productName:string, title:string) => {
    const titleLetters = title.toLowerCase().split('');
    return titleLetters.every((letter) => productName.toLowerCase().includes(letter));
  };

  const productIndex = allProducts.findIndex((product) =>
    containsAllLetters(product.producttitle, bannerTitle)
  );

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannercontent}>
          <h3 className="sub-heading">{mainBanner.subtitle}</h3>
          <h1>
            {bannerTitle.split(" ")[0]} <span>{bannerTitle.split(" ")[1]}</span>
          </h1>
          <h6>{mainBanner.description}</h6>
          <Link
            href={`products/details?productnumber=${productIndex}`}
            style={{ borderColor: "white", color: "white", maxWidth: "191px" }}
            className="button-outline"
          >
            Shop Now
          </Link>
        </div>
        <div className={styles.bannerimage}>
          <img src={mainBanner.imagesource} alt={bannerTitle} />
        </div>
      </div>
      <MiniBanners />
    </>
  );
};

export default Banners;
