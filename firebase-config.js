import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNGq2LfolGaRWc2LfWBu0VZjYhqsFacrU",
  authDomain: "mi-pagina-81ee0.firebaseapp.com",
  projectId: "mi-pagina-81ee0",
  storageBucket: "mi-pagina-81ee0.firebasestorage.app",
  messagingSenderId: "978932709829",
  appId: "1:978932709829:web:04499531ca2778076773ac"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);