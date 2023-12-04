import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { fireauth } from "../firebase/config";

export const useLogin = () => {
  const [error, setError] = useState();
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [isCancelled, setIsCanclled] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      //유저 로그인
      const res = await fireauth.signInWithEmailAndPassword(email, password);

      // 작업이 취소되었다면 스테이트 업데이트를 하지 않는다.
      if (!isCancelled) {
        //로그인 액션 디스패치
        dispatch({ type: "LOGIN", payload: res.user });
      }
      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  // useEffect의 return이 unmount될때의 작업(클린업)이 된다.
  useEffect(() => {
    setIsCanclled(false);
    // 로그인 작업중 중간에 사라지거나 종료시 return 함수가 실행됨
    return () => setIsCanclled(true);
  }, []);

  return { login, error, isPending };
};
