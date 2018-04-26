import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD7CHtb7-v03H-QPLCaEn2wLMqzGwxsuho",
    authDomain: "ioteme-site.firebaseapp.com",
    databaseURL: "https://ioteme-site.firebaseio.com",
    projectId: "ioteme-site",
    storageBucket: "",
    messagingSenderId: "835115764322"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  export default database;