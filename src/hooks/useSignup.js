import { useState } from "react";
import { fireauth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState();
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // 이메일,패스워드로 가입
      const res = await fireauth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(res.user); // 가입후 유저 정보 출력

      if (!res) {
        throw new Error("가입중 오류가 발생했습니다.");
      }
      // 유저 프로파일에 이름을 업데이트
      await res.user.updateProfile({ displayName: displayName });

      // 유저 정보를 state에 저장한다.
      dispatch({ type: "LOGIN", payload: res.user });

      setError(null);
      setIsPending(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};
