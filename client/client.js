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
  cell.style.backgroundColor = "red";
  console.log("cell", cell);
};

button.addEventListener("click", () => {
  // const name = document.querySelector("#name");
  // const message = document.querySelector("#message");
  const data = 1;

  // Send composed message to the server
  connection.send(data);

  // // clear input fields
  // name.value = "";
  // message.value = "";
});
