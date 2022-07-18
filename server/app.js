const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const movies = require("./db/mock-movies");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

app.use(({ res }) => {
  const message =
    "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
  res.status(404).json({ message });
});

app.listen(port, () => {
  console.log(
    `Notre application Node est démarrée sur : http://localhost:${port}`
  );
});
