import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  //본인설정
};

//firebase init
firebase.initializeApp(firebaseConfig);

//init service
const firedb = firebase.firestore();

export { firedb };
