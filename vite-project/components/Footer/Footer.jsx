import React from 'react'
import styles from "./Footer.module.css";
import Logo from "../../src/assets/header.logo.png";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
        <h1 className={styles.Logo}><img src={Logo} alt="ロゴ画像" /></h1>
        <p>Address unknown</p>
        <p>Tel　1234ー5678</p>
        <p>email: Sora.spaResort@.jp</p>
        <p>Spa&Sauna</p>
        <p>News</p>
        <p>Question</p>
        <p>Room</p>
        <p>Reserve</p>
        <p>Restrant</p>
        <p>Contact</p>
        <p>Plan</p>
        <p>About</p>
    </footer>
  )
}
