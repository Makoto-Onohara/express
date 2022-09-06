const http = require('http');
const { join } = require('path');
const PORT = 30000;
const html = require('fs').readFileSync("./index.html");
// web serverを作ろう
const server = http.createServer((req, res) => {
  // ブラウザからアクセスが来た時の処理
  res.writeHead(200, { "Content-Type": "text/html"});
  res.write(html);
  res.end();
});

server.listen(PORT, () => {
  console.log("servre running!");
});