// import http from "http";

// const server = http.createServer((req, res) => {
//   console.log("request Incoming");
// });
// server.listen(3000, () => {
//   console.log("app is running");
// });
import http from "http";

const server = http.createServer((req, res) => {
  console.log("Request incoming...");

  // Set the response header with a 200 status and content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send a response message
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});
