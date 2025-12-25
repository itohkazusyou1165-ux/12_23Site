import React from 'react';
import styles from "./RoomData.module.css";
import Room01 from "../../src/assets/room01.png";


    // DetailSection.jsx
export default function RoomData({ room }) {
  return (
    <>
    {/* //見出し部分中央よせ */}
    <div className={styles.roomtitle}>
      <h1>{room.id}</h1>
    </div>
{/* 画像とテキスト横並びflex */}
    <div className={styles.roomcontainer}>
      
      <div className={styles.roomimg}>
        <img src={room.image} alt="部屋の紹介" />
        </div>
        <div className={styles.roomtext}>
        <p className={styles.textchild}>{room.title}</p>
        <p className={styles.textchild}>{room.price}</p>
        <p className={styles.textchild}>{room.title} <br />{room.title}</p>
        <p className={styles.textchild}>{room.text}</p>
      </div>
    </div>
    </>
    
  );
}

// <h2>{room.title}</h2>
  

