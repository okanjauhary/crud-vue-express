const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  webRouter = require("./routes/web"),
  apiRouter = require("./routes/api");

app.use("/public", express.static("public"));

app.use(bodyParser.json());

app.use("/", webRouter);
app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

app.listen(8000, () => {
  console.log("Server is running in post 8000...");
});
