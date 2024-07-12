
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwK0ichC-DJxoec0RFrAPsUMEPIwvQzE4",
  authDomain: "foodcourt-80fc0.firebaseapp.com",
  databaseURL: "https://foodcourt-80fc0-default-rtdb.firebaseio.com",
  projectId: "foodcourt-80fc0",
  storageBucket: "foodcourt-80fc0.appspot.com",
  messagingSenderId: "382207958425",
  appId: "1:382207958425:web:1d65a262f2cd79d168c708",
  measurementId: "G-F94HZSH65B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);
