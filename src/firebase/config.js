import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHE7GFHoJaf6lpin7wiIBr4042o-Bvgj4",
  authDomain: "mymoney-cb633.firebaseapp.com",
  projectId: "mymoney-cb633",
  storageBucket: "mymoney-cb633.appspot.com",
  messagingSenderId: "719773013438",
  appId: "1:719773013438:web:4379561c94d98dbd1a15ef",
};

// 본인 계정의 키등 설정값을 가지고 초기화
firebase.initializeApp(firebaseConfig);

// 파이어스토어 DB 서비스
const firedb = firebase.firestore();
// 인증 서비스
const fireauth = firebase.auth();
// 타임스템프
const { Timestamp } = firebase.firestore;

export { firedb, fireauth, Timestamp };
