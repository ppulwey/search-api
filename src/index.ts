import cors from "cors";
import express from "express";

import terms from "./suggestions.json";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/terms", (req, res) => {
  res.send(terms);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
