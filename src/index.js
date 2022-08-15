import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// Firebase
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYoqU1ZMI5883OmcTbe6a3PyVCh49_tXs",
  authDomain: "mafty-shop.firebaseapp.com",
  databaseURL: "https://mafty-shop-default-rtdb.firebaseio.com",
  projectId: "mafty-shop",
  storageBucket: "mafty-shop.appspot.com",
  messagingSenderId: "202157372657",
  appId: "1:202157372657:web:62dee23937bfbde6c7a550"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


