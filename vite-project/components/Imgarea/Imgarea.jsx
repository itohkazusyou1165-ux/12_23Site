import React from 'react'
import Img02 from "../../src/assets/scroll01.png"
import styles from "./Imgarea.module.css";

export default function Imgarea({ imageSrc, altText}) {
  return (
    <div className={styles.Roomtext}>
    <p>Room</p>
    <p>Food</p>
    <p>Option</p>
    <img src={imageSrc} alt={altText} className={styles.Img0}/>
</div>
  )
}
