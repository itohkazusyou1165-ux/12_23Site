import AboutImg from "../../src/assets/pool.jpg";
import Img02 from "../../src/assets/scroll01.png";
import Img04 from "../../src/assets/sauna04.png";
import ImageSwiper from "../../features/Swiper/Swiper.jsx";
import styles from "./SaunaSpa.module.css";
import Reserve from "../Reserve/Reserve.jsx";
import Footer from "../Footer/Footer.jsx";


// Swiperのオブジェクト格納欄これを毎回使う時よぶ
const aboutImages = [
    { src: Img04, alt: "ファーストビュー1"},
    { src: Img04, alt: "ファーストビュー2"},
    { src: Img04, alt: "ファーストビュー3"},
  ];
  

export default function SaunaSpa() {
  return (
    <>
   <section className={styles.SaunaSpa} >
       {/* aboutImageをよんできている */}
       <h1 className={styles.Img}>
     <ImageSwiper images={aboutImages} />
     </h1>
     <Imgarea imageSrc={Img02} altText="レストランの料理"/>
     <Reserve/>
     <Footer/>
     </section>
    </>
  )
}
