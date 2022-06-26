const socket = new WebSocket(`ws://${window.location.host}`)// 백엔드 연결
const messageList = document.querySelector("ul")
const messageForm = document.querySelector("form")

function handleOpen(){
  console.log("Connetted to Server")  //connection이 open일때 사용
}

//메시지 받기
socket.addEventListener("open", handleOpen)

socket.addEventListener("message", (message) => {
  console.log("New message: ", message.data); //메시지 받았을때 리스너
}); 

socket.addEventListener("close", () => {
  console.log("Disconnected to Server nob") // 서버 연결 중단 리스너
})

// setTimeout(() => {
//   socket.send("hello from the browser!") // 브라우저에서 서버로 보낸 메시지
// }, 10000)

function handleSubmit(event){
  event.preventDefault();
  const input = messageForm.querySelector("input");
  //console.log(input.value)
  socket.send(input.value)
  input.value = ""
}

messageForm.addEventListener("submit", handleSubmit)