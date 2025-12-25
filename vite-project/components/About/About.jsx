import AboutImg from "../../src/assets/pool.jpg";
import Img02 from "../../src/assets/scroll01.png";
import Img03 from "../../src/assets/scroll005.png";
import styles from "./About.module.css";
import Card from "../Card/Card.jsx";
import { cardList } from "../Card/cardList.js";
import News from "../News/News.jsx";
import Footer from "../Footer/Footer.jsx";
import Room from "../Room/Room.jsx";
import ImageSwiper from "../../features/Swiper/Swiper.jsx";
import Reservearea from "../Reserve.area/Reservearea.jsx";

// Swiperのオブジェクト格納欄これを毎回使う時よぶ
const aboutImages = [
  { src: AboutImg, alt: "ファーストビュー1"},
  { src: AboutImg, alt: "ファーストビュー2"},
  { src: AboutImg, alt: "ファーストビュー3"},
];


export default function About() {
  return (
    <section className={styles.About}>
       {/* aboutImageをよんできている */}
      <h1 className={styles.Img}>
     <ImageSwiper images={aboutImages} />
     </h1>
      {/* テキストの親 */}
      <div className={styles.text01}>
        {/* 細かい説明 */}
        <div className={styles.text}>
          <p>
            都会の喧騒から遥か離れた、絶海の孤島。
            <br />
            視界を遮るものは何もなく、ただ圧倒的な青の世界が広がります。
          </p>
          <p>
            全室オーシャンビューのプライベートな空間は、
            <br />
            水、木、石といった自然素材が織りなす、研ぎ澄まされた静寂の境地。
            <br />
            聞こえるのは、穏やかな波音と、自身の内なる声だけ。
          </p>
          <p>
            限られたゲストだけに許された、日常からの解放と、
            <br />
            本質的な真の休息がここにあります。
          </p>
        </div>
        <p className={styles.vertical}>大人のための天空の隠れ家</p>
        <p className={styles.vertical}>空と静寂に包まれた</p>
      </div>
      {/* ただここでcardからオブジェクトから1番を呼び出しただけ */}
      <Card data={cardList[1]} />
      <div>
        <img src={Img02} alt="ロビー" className={styles.Img02} />
      </div>
      <Card data={cardList[0]} />
      <div>
        <img src={Img03} alt="ホテル外観" className={styles.Img03} />
      </div>
      <Card data={cardList[1]} />
      <News />
      <Reservearea/>
      <Footer />
     
    </section>
  );
}
