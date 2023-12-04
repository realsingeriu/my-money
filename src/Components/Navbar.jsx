import { Link } from "react-router-dom";
// CSS 모듈을 사용하면 CSS클래스가 다른 컴포넌트에도 적용되는 것을 방지
import styles from "./Navbar.module.css";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  // useLogout 훅 호출 및 logout 함수 추출
  const { logout } = useLogout();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>

        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/signup">가입하기</Link>
        </li>
        <li>
          <button className="btn" onClick={logout}>
            로그아웃
          </button>
        </li>
      </ul>
    </nav>
  );
}
