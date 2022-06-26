const socket = new WebSocket(`ws://${window.location.host}`)// 백엔드 연결


function handleOpen(){
  console.log("Connetted to Server")  //connection이 open일때 사용
}

//메시지 받기
socket.addEventListener("open", handleOpen)

socket.addEventListener("message", (message)=> {
  console.log("New message:", message.data) // 메시지를 받았을때 사용하는 리스너
})

socket.addEventListener("close", () => {
  console.log("Disconnected to Server nob") // 서버 연결 중단 리스너
})

setTimeout(() => {
  socket.send("hello from the browser!") // 브라우저에서 서버로 보낸 메시지
}, 10000)