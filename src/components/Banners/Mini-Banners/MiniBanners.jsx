'use client'
import styles from "./MiniBanners.module.css";
import { banners } from "@/data/productsData";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MiniBanners = () => {
  const router = useRouter();
  return (
    <div className={styles.minibanners}>
      <div className={styles.leftabanners}>
        <div onClick={()=> router.push('/products/minibannerone')} className={styles.widesquare}>
          <img src={banners.miniBanners.leftBannerOne[0].image} alt="Wide Banner" />
          <div>
            <h1>{banners.miniBanners.leftBannerOne[0].title}</h1>
            <p className={styles.widesquaredesc}>
              {banners.miniBanners.leftBannerOne[0].description}
            </p>
          </div>
        </div>

        <div className={styles.squarescontainer}>
          <div onClick={()=> router.push('/products/minibannertwo')} style={{ backgroundColor: "#EDEDED" }} className={styles.square1}>
            <img src={banners.miniBanners.leftBannerTwo[0].image} alt="" />
            <div className={styles.info}>
              <h1>
                {banners.miniBanners.leftBannerTwo[0]?.title.split(" ")[0]}{" "}
                {banners.miniBanners.leftBannerTwo[0]?.title.split(" ")[1]}{" "}
                <span>{banners.miniBanners.leftBannerTwo[0]?.title.split(" ")[2]}</span>
              </h1>
              <p className={styles.desc}>
                {banners.miniBanners.leftBannerTwo[0]?.description}
              </p>
            </div>
          </div>

          <div onClick={()=> router.push('/products/minibannerthree')} style={{ backgroundColor: "#353535", color: "white" }} className={styles.square2}>
            <img src={banners.miniBanners.leftBannerThree[0].image} alt="" />
            <div className={styles.info}>
              <h1>
                {banners.miniBanners.leftBannerThree[0]?.title.split(" ")[0]}{" "}
                <span>{banners.miniBanners.leftBannerThree[0]?.title.split(" ")[1]}</span>
              </h1>
              <p className={styles.desc}>
                {banners.miniBanners.leftBannerThree[0]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#EDEDED" }} className={styles.largebanner}>
        <div className={styles.info}>
          <h1>
            {banners.miniBanners.rightBanner[0]?.title.split(" ")[0]}{" "}
            <span>{banners.miniBanners.rightBanner[0]?.title.split(" ")[1]}</span>
          </h1>
          <p className={styles.desc}>
            {banners.miniBanners.rightBanner[0]?.description}
          </p>
          <Link href={`/products/minibannerfour`} className={"button-outline"}>{banners.miniBanners.rightBanner[0]?.buttonLabel || "Shop now"}</Link>
        </div>
        <img src={banners.miniBanners.rightBanner[0].image} alt="" />
      </div>
    </div>
  );
};

export default MiniBanners;
