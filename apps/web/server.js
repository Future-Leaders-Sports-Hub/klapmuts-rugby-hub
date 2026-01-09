const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1>Klapmuts Rugby Hub</h1>
    <p>Frontend running</p>
  `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Web running on port", PORT);
});
