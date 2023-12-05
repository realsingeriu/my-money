import React from "react";
import styles from "../footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>My Money App</h3>
          <p>자신의 품목별 거래장부를 써봐요.</p>
          <p>
            firebase, firestore로 만든 my money app
            <li>1. 네비게이션 가드 </li>
            <li>2. 인증 컨텍스트 (Auth Context)</li>
            <li>3. Hook 훅</li>
            <li>4. query쿼리를 이용한 uid 출력</li>
            <li>5. sortTransactions정렬 추가 </li>
            <li>6. calculateTotal 거래 가격 총합</li>
          </p>
        </div>
        <div className={styles.contact}>
          <h4>문의사항</h4>
          <p>Email: realsingeriu12@naver.com</p>
          <link> www.github.com/realsingeriu/my-money</link>
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
