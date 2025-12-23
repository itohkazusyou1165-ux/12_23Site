
import styles from "./Card.module.css"

// なんども使用するもの
export default function Card({data}) {
    if (!data) { return null;    
    }

    // オブジェクトで箱の中に全て入れる
    const{ title, description, linkText, linkUrl, imgSrc, isReversed } = data;

    // ここの下で使用する
  return (
    <div className={`${styles.cardContainer} ${isReversed ? styles.reverse : ""}`}>
        <div className={styles.imageArea}>
            {/* ここでjsフォルダの中にある画像とタイトルを使用する */}
            <img src={imgSrc} alt={title} />
        </div>
        <div className={styles.textArea}>
<h1 className={styles.title}>{title}</h1>
<p className={styles.description}>{description}</p>
<a href={linkUrl} className={styles.link}>{linkText}</a>
        </div>
    </div>
  )
}
