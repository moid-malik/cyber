import styles from "./Banners.module.css";
import MiniBanners from "./Mini-Banners/MiniBanners";
import { banners } from "@/data/productsData";
const Banners = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannercontent}>
          <h3 className="sub-heading">{banners.mainBanner[0].slogan}</h3>
          <h1>
          {banners.mainBanner[0].title.split(" ")[0]} <span>{banners.mainBanner[0].title.split(" ")[1]}</span>
          </h1>
          <h6>{banners.mainBanner[0].description}</h6>
          <button 
          style={{"borderColor": "white", "color":"white","maxWidth":"191px"}}
          className="button-outline">Shop Now</button>
        </div>
        <div className={styles.bannerimage}>
          <img src={banners.mainBanner[0].image} alt="" />
        </div>
      </div>
      <MiniBanners/>
    </>
  );
};

export default Banners;
