import AboutImg from "../../src/assets/pool.jpg";
import Img02 from "../../src/assets/scroll01.png";
import Img03 from "../../src/assets/scroll005.png";
import Img04 from "../../src/assets/Food.png";
import Img05 from "../../src/assets/food03.png";
import Img06 from "../../src/assets/scroll04.png";
import ImageSwiper from "../../features/Swiper/Swiper.jsx";
import styles from "./Restaurant.module.css"
import Imgarea from "../Imgarea/Imgarea.jsx";
//jsファイルの呼び出し
import { RoomData } from "../RoomData/RoomData.js";
import DetailSection from "../RoomData/RoomData.jsx";
import Reserve from "../Reserve/Reserve.jsx";
import Footer from "../Footer/Footer.jsx";

// Swiperのオブジェクト格納欄これを毎回使う時よぶ
const aboutImages = [
    { src: Img04, alt: "ファーストビュー1"},
    { src: Img04, alt: "ファーストビュー2"},
    { src: Img04, alt: "ファーストビュー3"},
  ];
  
export default function Restaurant() {
  return (
    <>
    <section className={styles.Restaurant} >
       {/* aboutImageをよんできている */}
      <h1 className={styles.Img}>
     <ImageSwiper images={aboutImages} />
     </h1>
     <Imgarea imageSrc={Img05} altText="レストランの料理"/>
     <div className={styles.restauranttext}>
      <h1>原始の火と海の恵み</h1>
      <p>IGNISは、単なる食事の場ではありません。それは、貴方の五感をリセットし、 <br />活力を取り戻す儀式です。</p>
      <p>波の音、薪の燃える香り、深い陰影を生む暖色の照明、そして皿の上の一瞬の輝き。<br />
この空間で、貴方は日常のビジネスから完全に切り離され、純粋な「食の喜び」へと回帰します。<br />
「AMATSUの食事は、次の決断のためのエネルギーチャージである」。<br />
私たちはそう信じ、一皿一皿に魂を込めています。</p>
     </div>
     <img src={Img06} alt="写真" />
     <div className={styles.restauranttext}>
      <h1>コース料理</h1>
      <p>IGNISは、単なる食事の場ではありません。それは、貴方の五感をリセットし、 <br />活力を取り戻す儀式です。</p>
      <p>波の音、薪の燃える香り、深い陰影を生む暖色の照明、そして皿の上の一瞬の輝き。<br />
この空間で、貴方は日常のビジネスから完全に切り離され、純粋な「食の喜び」へと回帰します。<br />
「AMATSUの食事は、次の決断のためのエネルギーチャージである」。<br />
私たちはそう信じ、一皿一皿に魂を込めています。</p>
     </div>
     <div>
      {RoomData.map((room)=>(
        <DetailSection
        key={room.id} 
        room={room}
  
         />
      ))}
     </div>
     <Reserve/>
     <Footer/>
     </section>
    </>
  )
}
