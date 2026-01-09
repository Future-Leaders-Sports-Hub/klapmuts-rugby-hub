const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    app: "Klapmuts Rugby Hub API",
    status: "running"
  }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("API running on port", PORT);
});
