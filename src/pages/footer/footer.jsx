import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>My Money App</h3>
          <p>자신의 품목별 거래장부를 써봐요.</p>
        </div>
        <div className={styles.contact}>
          <h4>문의사항</h4>
          <p>Email: realsingeriu12@naver.com</p>
          <p>전화번호: 123-456-7890</p>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>&copy; 2023 My Money App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
