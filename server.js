const express = require("express");
const app = express();
app.use(express.static("./dist/AnimeApp"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "./dist/AnimeApp/" });
});

app.listen(process.env.PORT || 8080);
