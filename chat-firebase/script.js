// 🔥 Config Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBpUHpE21fYlx8QpEE-vL8buRNldrilCUg",
    authDomain: "fordbchat.firebaseapp.com",
    databaseURL: "https://fordbchat-default-rtdb.firebaseio.com",
    projectId: "fordbchat",
    storageBucket: "fordbchat.firebasestorage.app",
    messagingSenderId: "163687859817",
    appId: "1:163687859817:web:745ea384886f923b9604f8",
    measurementId: "G-496K19JRJV"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const messagesRef = db.ref("mensagens");
  
  // 📨 Enviar mensagem
  document.getElementById("sendButton").addEventListener("click", () => {
    const input = document.getElementById("messageInput");
    const texto = input.value.trim();
    if (texto !== "") {
      messagesRef.push({ texto });
      input.value = "";
    }
  });
  
  // 💬 Receber mensagens em tempo real
  messagesRef.on("child_added", snapshot => {
    const msg = snapshot.val();
    const div = document.createElement("div");
    div.textContent = msg.texto;
    document.getElementById("messages").appendChild(div);
  });
  