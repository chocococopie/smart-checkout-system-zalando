import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;
app.use(cors());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
