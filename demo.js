// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write('{"name":"Riddhi"}');
//     res.end();
//   })
//   .listen(7000);

var http = require("http");
var data = [
  { name: "Riddhi", age: "26", hobby: "Travelling" },
  { name: "Abc", age: "28", hobby: "Working" },
  { name: "Jon", age: "20", hobby: "Shopping" },
];

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(3000);
