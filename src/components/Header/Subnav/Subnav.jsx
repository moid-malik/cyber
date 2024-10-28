import Cameras from "../../../../public/Cameras";
import Computers from "../../../../public/Computers";
import Gaming from "../../../../public/Gaming";
import Headphones from "../../../../public/Headphones";
import Phones from "../../../../public/Phones";
import SmartWatches from "../../../../public/SmartWatches";
import styles from "./Subnav.module.css";
function Subnav() {
  return (
    <div className={styles.subnav}>
      <div className={styles.list}>
        <div>
          <Phones />
          <a href="">Phones</a>
        </div>
        <div className={styles.divider}></div>
        <div>
          <Computers />
          <a href="">Computers</a>
        </div>
        <div className={styles.divider}></div>
        <div>
          <SmartWatches />
          <a href="">Smart Watches</a>
        </div>
        <div className={styles.divider}></div>
        <div>
          <Cameras />
          <a href="">Cameras</a>
        </div>
        <div className={styles.divider}></div>
        <div>
          <Headphones />
          <a href="">Headphones</a>
        </div>
        <div className={styles.divider}></div>
        <div>
          <Gaming />
          <a href="">Gaming</a>
        </div>
      </div>
    </div>
  );
}

export default Subnav;
