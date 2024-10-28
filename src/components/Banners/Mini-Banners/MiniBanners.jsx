import styles from "./MiniBanners.module.css";
import { banners } from "@/data/productsData";

const MiniBanners = () => {
  return (
    <div className={styles.minibanners}>
      <div className={styles.leftabanners}>
        <div className={styles.widesquare}>
          <img src={banners.miniBanners.leftBannerOne[0].image} alt="Wide Banner" />
          <div>
            <h1>{banners.miniBanners.leftBannerOne[0].title}</h1>
            <p className={styles.widesquaredesc}>
              {banners.miniBanners.leftBannerOne[0].description}
            </p>
          </div>
        </div>

        <div className={styles.squarescontainer}>
          <div style={{ backgroundColor: "#EDEDED" }} className={styles.square1}>
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

          {/* Left Banner Three */}
          <div style={{ backgroundColor: "#353535", color: "white" }} className={styles.square2}>
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
          <button className={"button-outline"}>{banners.miniBanners.rightBanner[0]?.buttonLabel || "Shop now"}</button>
        </div>
        <img src={banners.miniBanners.rightBanner[0].image} alt="" />
      </div>
    </div>
  );
};

export default MiniBanners;
