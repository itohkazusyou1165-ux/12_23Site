import React from 'react'
import styles from "./Reserve.module.css";

export default function Reserve() {
  return (
    <section className={styles.Reserve}>
        <div className={styles.Reservetext}>
            <h1>予約について</h1>
                   <p>
                   Step 01: 
                   </p>
                   <p>ご希望の日程を選択し、予約リクエストをお送りください。<br /> 
                   ※1日15組に達し次第、受付を終了いたします。</p>
                   <p>Step 02:</p>
                   <p>予約確定後、専用の「招待状」をメールにて送付いたします。
                   これより先は、選ばれた方のみの特別な時間となります。</p>
                   <p>Step 03: </p>
                   <p>ご宿泊の3日前に、島へのアクセス詳細と送迎の手配についてコンシェルジュよりご連絡いたします。</p>
        </div>
    </section>
  )
}