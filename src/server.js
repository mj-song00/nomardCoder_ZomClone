import express from "express"
import http from "http"
import {WebSocketServer}  from "ws"
import path from "path"

const app = express()
const __dirname = path.resolve()

app.set ("view engine", "pug")// 뷰 엔진 : 퍼그 설정
app.set("views", __dirname + "/src/views") //express에 template이 어디있는지 지정
app.use("/public", express.static(__dirname + "/src/public/")) // public url을 생성해서 유저에게 파일 공유
app.get("/", (_, res)=> res.render("home"))// home.pug를 render해주는 route handler
app.get("/*", (_, res) => res.redirect("/")) //아무 url입력해도 홈으로


const handleListen = () => console.log(`Listeing on http://localhost:3000`)

const server = http.createServer(app)
const wss = new WebSocketServer({server}) // http, websocket중 하나만 만들어도 됨다

function handleConnection(socket){
  console.log(socket)
}

wss.on("connection", handleConnection )

server.listen(3000, handleListen)