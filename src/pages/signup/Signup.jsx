import { useSignup } from "../../hooks/useSignup";
import styles from "./Signup.module.css";
import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [name, setName] = useState("");
  // 미리 만든 가입하기 훅으로 가입하기 함수와 에러, 로딩상태를 가져옴
  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, passowrd, name);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      {/* 패스워드 라벨과 입력창 */}
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={passowrd}
        />
      </label>
      {/* name 라벨과 입력창 type은 text */}
      <label>
        <span>Name:</span>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>

      {!isPending && <button className="btn">가입하기</button>}
      {isPending && (
        <button className="btn" disabled>
          가입중...
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
