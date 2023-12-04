import React, { useState } from "react";
import styles from "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, passowrd);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      {/* 패스워드 라벨과 입력창도 완성한다! */}
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={passowrd}
        />
      </label>
      {/* 비동기 작업시 isPending의 값으로 로딩중 버튼 표시하기 및 에러시 에러메세지 */}
      {!isPending && <button className="btn">로그인</button>}
      {isPending && (
        <button className="btn" disabled>
          로딩중...
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
