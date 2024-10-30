import Link from "next/link";
import styles from "./Banner.module.css";
function Banner({ data }) {
  return (
    <>
    {data.map((elem, index)=>(
      <div key={index} style={{"backgroundColor":elem.bgcolor}} className={styles.banner}>
      <div className={styles.productimage}>
        <img style={index > 2 ? {"marginTop":"80px"} : {}} src={elem.imagesource} />
      </div>
      <div 
       style={
        index > 2 ? {"color": "white", "marginTop": "93px"} :
        index > 1 ? {"color": "white"} : {}
      }
       className={styles.info}>
        <div className={styles.title}>{elem.title}</div>
        <div
        style={
          index > 1 ? {"color":"white"} : {}
        }
         className={styles.description}>{elem.description}
        </div>
      </div>
        <Link 
        href={`products/details?productnumber${index}`}
        style={
          index > 1 ? {"borderColor":"white", "color":"white"} : {}
        }
        className="button-outline">Shop Now</Link>
        
    </div>
    ))}
    </>
  );
}

export default Banner;
