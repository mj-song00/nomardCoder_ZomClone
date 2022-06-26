const socket = new WebSocket(`ws://${window.location.host}`)// 백엔드 연결
const messageList = document.querySelector("ul")
const messageForm = document.querySelector("#message")
const nickForm = document.querySelector("#nick")

function makeMessage(type, payload){
  const msg = {type, payload}
  return JSON.stringify(msg)
}

function handleOpen(){
  console.log("Connetted to Server")  //connection이 open일때 사용
}

//메시지 받기
socket.addEventListener("open", handleOpen)

socket.addEventListener("message", (message) => {
  console.log("New message: ", message.data); //메시지 받았을때 리스너
  const li = document.createElement("li") //li생성
  li.innerText = message.data // 채팅을 li에 넣어주기
  messageList.append(li) // messageList저장
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
  socket.send(makeMessage("new_message", input.value))
  input.value = ""
}

function handleNickSubmit(event){
  event.preventDefault()
  const input = nickForm.querySelector("input")
  socket.send(makeMessage("nickname", input.value))
}

messageForm.addEventListener("submit", handleSubmit)
nickForm.addEventListener("submit", handleNickSubmit)