import AboutImg from "../../src/assets/pool.jpg";
import Img02 from "../../src/assets/scroll01.png";
import Img03 from "../../src/assets/scroll05.png";
import ImageSwiper from "../../features/Swiper/Swiper.jsx";

// Swiperのオブジェクト格納欄これを毎回使う時よぶ
const aboutImages = [
    { src: AboutImg, alt: "ファーストビュー1"},
    { src: AboutImg, alt: "ファーストビュー2"},
    { src: AboutImg, alt: "ファーストビュー3"},
  ];
  

export default function SaunaSpa() {
  return (
    <>
    <section className={styles.SaunaSpa} >
       {/* aboutImageをよんできている */}
      <h1>
     <ImageSwiper images={aboutImages} />
     </h1>
     </section>
    </>
  )
}
