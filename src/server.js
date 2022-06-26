import express from "express"
import path from "path"

const app = express()
const __dirname = path.resolve()

app.set ("view engine", "pug")// 뷰 엔진 : 퍼그 설정
app.set("views", __dirname + "/src/views") //express에 template이 어디있는지 지정
app.use("/public", express.static(__dirname + "/src/public/")) // public url을 생성해서 유저에게 파일 공유
app.get("/", (req, res)=> res.render("home"))// home.pug를 render해주는 route handler

const handleListen = () => console.log(`Listeing on http://localhost:3000`)
app.listen(3000, handleListen);