import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { fireauth } from "../firebase/config";

export const useLogout = () => {
  const [error, setError] = useState();
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [isCancelled, setIsCanclled] = useState(false);

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      //파이어베이스 로그아웃
      await fireauth.signOut();

      // 작업이 취소되었다면 스테이트 업데이트를 하지 않는다.
      if (!isCancelled) {
        //로그아웃 액션 디스패치
        dispatch({ type: "LOGOUT" });
      }
      setIsPending(false);
      setError(null);
      Navigate("/login"); // 로그아웃하면 로그인 페이지로 가도록 네비게이션 설정
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  // useEffect의 return이 unmount될때의 작업(클린업)이 된다.
  useEffect(() => {
    setIsCanclled(false);
    // 로그아웃 작업중 중간에 사라지거나 종료시 return 함수가 실행됨
    return () => setIsCanclled(true);
  }, []);

  return { logout, error, isPending };
};
