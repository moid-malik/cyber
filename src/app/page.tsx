import styles from "./page.module.css";
import Banners from "@/components/Banners/Banner";
import Categorize from "@/components/Categorize-Products/Categorize";
import Products from "@/components/Products/Products";
import VerticalBanners from "@/components/VerticalBanners/VerticalBanners";
import DiscountedProducts from "@/components/DiscountedProducts/DiscountedProducts";
import BottomBanner from "@/components/Banners/BottomBanners/Banner";
import categories from "@/data/categories"

export default function Home() {
  return (
    <>
      <main className={styles.main}> 
        <Banners />
        <Categorize categories={categories} />
        <Products />
        <VerticalBanners />
        <DiscountedProducts />
        <BottomBanner />
      </main>
    </>
  );
}
