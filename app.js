const express = require("express");
const app = express();
const port = 3000;

const postRouter = require("./routes/post.js");
const commentRouter = require("./routes/comment.js");

const connect = require("./schemas");
connect();

// body-parser Middleware를 쓰기위한 문법
app.use(express.json())
// localhost:3000/api -> postRouter
// POST메소드로 들어오는 바디 데이터를 사용하기위해 필요한 문법
app.use("/",[postRouter,commentRouter]);

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});