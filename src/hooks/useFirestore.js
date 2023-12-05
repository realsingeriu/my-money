import { useEffect, useReducer, useState } from "react";
import { firedb, Timestamp } from "../firebase/config";

let initalState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, errror: null };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        errror: null,
      };
    case "DELETE_DOCUMENT":
      return { isPending: false, document: null, success: true, errror: null };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        errror: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initalState);
  const [isCancelled, setIsCancelled] = useState(false);

  // DB 컬렉션 레퍼런스
  const ref = firedb.collection(collection);

  // 취소가 아닐경우에만 디스패치하기
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // doc 추가
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const createdAt = Timestamp.fromDate(new Date()); // 현재날짜시간으로 날짜데이터 만들기
      const addedDocument = await ref.add({ ...doc, createdAt }); // 날짜시간과 함께 저장하기
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  // doc 삭제
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });

    try {
      await ref.doc(id).delete(); // doc id로 삭제
      dispatchIfNotCancelled({ type: "DELETE_DOCUMENT" });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: "삭제할 수 없습니다." });
    }
  };

  useEffect(() => {
    setIsCancelled(false);
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, response, deleteDocument };
};
