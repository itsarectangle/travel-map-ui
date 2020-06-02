const express = require("express");
const path = require("path");
const compression = require("compression");

const port = process.env.PORT || 3000;
const host = '0.0.0.0';
const app = express();
app.use(compression());
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function(req, res) {
  return res.send("pong");
});
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, host, () => console.log(`Server running on port ${port}`));
