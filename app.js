const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 8080;

app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    if (err) throw err;
    return res.send(data);
  });
});

app.get("/about", (req, res) => {
  fs.readFile("./about.html", (err, data) => {
    if (err) throw err;
    return res.send(data);
  });
});

app.get("/contact-me", (req, res) => {
  fs.readFile("./contact-me.html", (err, data) => {
    if (err) throw err;
    return res.send(data);
  });
});

app.all("*", (req, res) => {
  fs.readFile("./404.html", (err, data) => {
    if (err) throw error;
    return res.type("html").status(404).send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
