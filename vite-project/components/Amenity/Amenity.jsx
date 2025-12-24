import React from 'react';
import styles from "./Amenity.module.css";
import Img from "../../src/assets/sauna02.png"

export default function Amenity() {
  return (
    <>
    <div className={styles.Amenityh1}>
        <h1>Amenity</h1>
    </div>
        <div className={styles.Amenity}>
{/* ベット */}

        <div className={styles.children}>
            <p>view more</p>
            <img src={Img} alt="サウナ" />
            <p>冷蔵庫 / ケトル / 電子レンジ / 炊飯器<br />/オーブントースター / IHクッキングヒーター <br />/食器・グラス（人数分） / 調理器具</p>
        </div>
{/* ベット */}
        <div className={styles.children}>
            <p>view more</p>
            <img src={Img} alt="サウナ" />
            <p>ガウン / エアコン / 空気清浄機<br />/ワイヤレススピーカー/無料Wi-Fi</p>
        </div>
{/* 部屋 */}
        <div className={styles.children}>
            <p>view more</p>
            <img src={Img} alt="サウナ" />
            <p>ヘアドライヤー / シャンプー <br />/ ボディソープ/タオル類 / 歯ブラシ<br /> / カミソリ/コットン・綿棒セット
            </p>
        </div>
    </div>
    </>
  )
}
