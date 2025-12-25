import styles from "./Room.module.css";
import AboutImg from "../../src/assets/pool.jpg";
import Img02 from "../../src/assets/scroll01.png";
import Img03 from "../../src/assets/scroll005.png";
import ImageSwiper from "../../features/Swiper/Swiper.jsx";
import Card from "../Card/Card.jsx"
import { cardList } from "../Card/cardList.js";
import Footer from "../Footer/Footer.jsx";
import News from "../News/News.jsx";
import Reserve from "../Reserve/Reserve.jsx";
import Amenity from "../Amenity/Amenity.jsx";
import Imgarea from "../Imgarea/Imgarea.jsx";


// Swiperのオブジェクト格納欄これを毎回使う時よぶ
const aboutImages = [
    { src: Img03, alt: "ファーストビュー1"},
    { src: Img03, alt: "ファーストビュー2"},
    { src: Img03, alt: "ファーストビュー3"},
  ];
  
export default function Room() {
  return (
    <>
    <section className={styles.Room} >
       {/* aboutImageをよんできている */}
       <h1 className={styles.Img}>
     <ImageSwiper images={aboutImages} />
     </h1>
     <Imgarea imageSrc={Img02} altText="レストランの料理"/>
        <Card data={cardList[0]} />
        <Card data={cardList[1]} />
        <Card data={cardList[0]} />
       <Amenity/>
       <Reserve/>
       <Footer/>
       
     </section>
    </>
  )
}

