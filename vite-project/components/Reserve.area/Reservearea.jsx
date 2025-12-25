import React from 'react'
import styles from "./Reservearea.module.css";


export default function Reservearea() {
  return (
    <div className={styles.Reservearea}>
      <h1>予約について</h1>
      <p>Step01</p>
      <p>ご希望の日程を選択し、予約リクエストをお送りください。 
      ※1日15組に達し次第、受付を終了いたします。</p>


      <p>Step02</p>
      <p>予約確定後、専用の「招待状」をメールにて送付いたします。
      これより先は、選ばれた方のみの特別な時間となります。</p>

      <p>Step03</p>
      <p>ご宿泊の3日前に、島へのアクセス詳細と送迎の手配についてコンシェルジュよりご連絡いたします。</p>
      
    </div>
  )
}
