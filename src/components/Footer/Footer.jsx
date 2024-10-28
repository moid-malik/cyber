import LogoWhite from "../../../public/LogoWhite";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer 
    // style={
    //   pathname === '/login' || '/register' ? {"display":"none"} : {}
    // }
     className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.footerleft}>
          <div className="logo">
            <LogoWhite />
          </div>
          <p className="tagline">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className={styles.footernavigation}>
          <div className={styles.footernavigationsection}>
            <h3 className={styles.title}>Services</h3>
            <div className={styles.links}>
              <a href="">Bonus program</a>
              <a href="">Gift cards</a>
              <a href="">Credit and payment</a>
              <a href="">Service contract</a>
              <a href="">Non-cash account</a>
              <a href="">Payment</a>
            </div>
          </div>

          <div className={styles.footernavigationsection}>
            <h3 className={styles.title}>Assistance to the buyer</h3>
            <div className={styles.links}>
              <a href="">Find an order</a>
              <a href="">Terms of delivery</a>
              <a href="">Exchange and return of goods</a>
              <a href="">Guarantee</a>
              <a href="">Frequently asked questions</a>
              <a href="">Terms of use of the site</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialicons}>
        <img className={styles.img} alt="Facebook" src="/Twitter.png"></img>
        <img className={styles.img} alt="Facebook" src="/Facebook.png"></img>
        <img className={styles.img} alt="Facebook" src="/Tiktok.png"></img>
        <img className={styles.img} alt="Facebook" src="/Instagram.png"></img>
      </div>
    </footer>
  );
}

export default Footer;
