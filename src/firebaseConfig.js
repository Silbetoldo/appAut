// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDqXwAn4MNN9fXhG4iytR-S9DE-1KXyF78",
  authDomain: "appauth-c5ace.firebaseapp.com",
  projectId: "appauth-c5ace",
  storageBucket: "appauth-c5ace.appspot.com",
  messagingSenderId: "527386171373",
  appId: "1:527386171373:android:73d5698df92cccd2a239e4" // Substitua pelo seu App ID
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Obtenha a instância de autenticação
export const auth = getAuth(app);
