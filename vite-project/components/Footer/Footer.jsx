import styles from "./Footer.module.css";
import Logo from "../../src/assets/header.logo.png";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.imgcontainer}>
        <img src={Logo} alt="フッターロゴ" />
        </div>

        <div className={styles.listcontainer}>
          <p>Address unknown</p>
          <p>Tel　1234ー5678</p>
          <p>email: Sora.spaResort@.jp</p>
        </div>

        <nav className={styles.nav1}>
          <ul>
            <li>Spa&Sauna</li>
            <li>Room</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>News</li>
            <li>Reserve</li>
            <li>Plan</li>
          </ul>
          <ul>
            <li>Question</li>
            <li>restrant</li>
            <li>About</li>
          </ul>
        </nav>
    </footer>
  )
}
