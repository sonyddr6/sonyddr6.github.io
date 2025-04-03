// 🧠 Firebase Config (troque pelos seus dados do console Firebase)
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "seu-projeto.firebaseapp.com",
    databaseURL: "https://seu-projeto-default-rtdb.firebaseio.com",
    projectId: "seu-projeto",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:xxxxxxxxxx"
  };
  
  // 🔥 Inicializa Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const messagesRef = db.ref("mensagens");
  
  // ✉️ Envia mensagem
  document.getElementById("sendButton").addEventListener("click", () => {
    const input = document.getElementById("messageInput");
    const text = input.value.trim();
    if (text !== "") {
      messagesRef.push({ texto: text });
      input.value = "";
    }
  });
  
  // 🔁 Recebe mensagens em tempo real
  messagesRef.on("child_added", (snapshot) => {
    const msg = snapshot.val();
    const div = document.createElement("div");
    div.textContent = msg.texto;
    document.getElementById("messages").appendChild(div);
  });
  
  // 🌙 Toggle modo escuro
  document.getElementById("toggleDark").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  