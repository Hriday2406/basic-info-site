const http = require("http");
const fs = require("fs");
const PORT = 8080;

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    if (req.url === "/") {
      fs.readFile("./index.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/about") {
      fs.readFile("./about.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/contact-me") {
      fs.readFile("./contact-me.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
    } else {
      res.statusCode = 404;
      fs.readFile("./404.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
  });
