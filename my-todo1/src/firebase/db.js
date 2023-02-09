import firebase from 'firebase/app'; // 파이어베이스 기능 불러오기
import 'firebase/firestore'; // 파이어베이스의 파이어스토어 기능 불러오기

const firebaseConfig = {
    apiKey: "AIzaSyDaD7-FtXX7IfRrCtP4D2-Z2gM8AaTI3mM",
    authDomain: "my-todo1-24e3b.firebaseapp.com",
    projectId: "my-todo1-24e3b",
    storageBucket: "my-todo1-24e3b.appspot.com",
    messagingSenderId: "858753608034",
    appId: "1:858753608034:web:dcb8cf1636cbf7875aa43b"
  };

  export const db = firebase.initializeApp(firebaseConfig).firestore();