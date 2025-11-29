"use strict";
// Configuration Firebase
// 
// INSTRUCTIONS DE CONFIGURATION :
// 1. Allez sur https://console.firebase.google.com/
// 2. Créez un nouveau projet (ou utilisez un existant)
// 3. Activez Firestore Database (Mode production)
// 4. Dans les paramètres du projet > Vos applications > Application Web
// 5. Copiez les valeurs de configuration et remplacez-les ci-dessous
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.db = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const auth_1 = require("firebase/auth");
// REMPLACEZ CES VALEURS PAR VOTRE CONFIGURATION FIREBASE
const firebaseConfig = {
    apiKey: "VOTRE_API_KEY",
    authDomain: "VOTRE_PROJET.firebaseapp.com",
    projectId: "VOTRE_PROJECT_ID",
    storageBucket: "VOTRE_PROJET.appspot.com",
    messagingSenderId: "VOTRE_SENDER_ID",
    appId: "VOTRE_APP_ID"
};
// Initialisation Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
// Services Firebase
exports.db = (0, firestore_1.getFirestore)(app);
exports.auth = (0, auth_1.getAuth)(app);
exports.default = app;
//# sourceMappingURL=config.js.map