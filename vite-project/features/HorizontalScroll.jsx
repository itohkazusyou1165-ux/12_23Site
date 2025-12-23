// src/features/HorizontalScroll.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HorizontalScroll.module.css";

// 画像インポート
import img1 from "../src/assets/scroll02.png";
import img2 from "../src/assets/scroll01.png";
import img3 from "../src/assets/scroll03.png";
import img4 from "../src/assets/scroll04.png";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    const tween = gsap.fromTo(
      container,
      { x: 0 },
      {
        x: () => -(window.innerWidth * 3), // 3枚分スクロール
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + window.innerWidth * 3,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      }
    );

    // 画像読み込み後やルーティング後に ScrollTrigger を再計算
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("load", refresh);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.horizontal}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.panel}>
          <img src={img1} alt="panel1" />
        </div>
        <div className={styles.panel}>
          <img src={img2} alt="panel2" />
        </div>
        <div className={styles.panel}>
          <img src={img3} alt="panel3" />
        </div>
        <div className={styles.panel}>
          <img src={img4} alt="panel4" />
        </div>
        <div className={styles.panel}>
          <img src={img4} alt="panel5" />
        </div>
        <div className={styles.panel}>
          <img src={img4} alt="panel6" />
        </div>
      </div>
    </section>
  );
}
