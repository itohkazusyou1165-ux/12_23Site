import styles from "./News.module.css";
import { NewsList } from "./news.data.js";
import Logo from "../../src/assets/header.logo.png"

export default function News() {
  return (
    <>
      

      <div className={styles.Newscontainer}>
        {NewsList.map((item) => (
          <div key={item.id} className={styles.NewsCard}>
            <div className={styles.TextContent}>
              <p className={styles.Title}>{item.title}</p>
              <p className={styles.Subtitle}>{item.subtitle}</p>
            </div>

            <div className={styles.ImageArea}>
              <img src={item.img} alt={item.title} />
            </div>

            <div className={styles.Footer}>
              <span className={styles.footer}>{item.id}</span>
              <span>
                <img src={Logo} alt="ロゴ" className={styles.Logo} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
