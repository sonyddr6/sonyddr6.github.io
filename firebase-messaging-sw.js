importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyC_dM10X2LL_EHydY72WEKeWnBq506qXFQ",
  authDomain: "noticechatapp.firebaseapp.com",
  projectId: "noticechatapp",
  storageBucket: "noticechatapp.firebasestorage.app",
  messagingSenderId: "138553371560",
  appId: "1:138553371560:web:8efecde11b43220e740b9d",
  measurementId: "G-LDYZGFHL1L"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("Mensagem recebida em segundo plano", payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/icon.png"
    });
});
