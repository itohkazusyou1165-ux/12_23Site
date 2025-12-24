// Router・module.css
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../src/assets/header.logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
  <h1 className={styles.Logo}><img src={Logo} alt="Logo" /></h1>
<nav className={styles.nav}>
  <ul>
    {/* Routerを使用 */}
    <li><Link to="/About">About</Link></li>
    <li><Link to="/Room">Room</Link></li>
    <li><Link to="/Restaurant">Restrant</Link></li>
    <li><Link to="/Sauna&Spa">Spa&Sauna</Link></li>
    <li><Link to="/">Contact</Link></li>
  </ul>
</nav>
</header>
  )
}

