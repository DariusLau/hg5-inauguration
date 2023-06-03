const connection = new WebSocket("ws://localhost:8080");
const button = document.querySelector("#send");

let globalCounter = 0;


connection.onopen = (event) => {
  console.log("WebSocket is open now.");
};

connection.onclose = (event) => {
  console.log("WebSocket is closed now.");
};

connection.onerror = (event) => {
  console.error("WebSocket error observed:", event);
};

connection.onmessage = (event) => {
  // append received message from the server to the DOM element
  // const chat = document.querySelector("#chat");
  // chat.innerHTML += event.data;
  // console.log(event.data, globalCounter);
  globalCounter++;
  console.log("globalCounter", globalCounter);

  let cell = document.getElementById(cellCounter - globalCounter);

  if (cellCounter - globalCounter <= 0) {
    const jsConfetti = new JSConfetti()
    // play()

    jsConfetti.addConfetti({
      emojis: ['🎆', '🛠️', '👩‍💻', '👨‍💻'],
    })

    const loading = document.getElementById('loading')
    // hide loading
    loading.style.display = 'none'
    // show button
    const loaded = document.getElementById('loaded')
    loaded.style.display = 'block'

  }
  cell.style.backgroundColor = "rgb(76, 235, 52)";
  console.log("cell", cell);
};

button.addEventListener("click", () => {
  // const name = document.querySelector("#name");
  // const message = document.querySelector("#message");
  console.log('click')
  const data = 1;
  const jsConfetti = new JSConfetti()
  // get random emoji
  const emojis = ['🧰', '🛠️', '👩‍💻', '👨‍💻', '🧡', '💰']
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]

  jsConfetti.addConfetti({
    emojis: [randomEmoji],
    confettiNumber: 10,
  })

  // Send composed message to the server
  connection.send(data);

  // // clear input fields
  // name.value = "";
  // message.value = "";
});


// didnt work (the user should interact with the document first)
function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
