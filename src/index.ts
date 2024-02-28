import cors from "cors";
import express, { Request } from "express";
import path from "path";

import terms from "./suggestions.json";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/terms", (req, res) => {
  res.send(terms);
});

app.get(
  "/suche/mehr",
  async (
    req: Request<{}, {}, {}, { q: string; cp: number; mp: number }>,
    res
  ) => {
    const q = req.query.q;
    const cp = req.query.cp;
    const mp = req.query.mp;

    await new Promise((resolve) => setTimeout(resolve, 5000));

    if (cp !== undefined) {
      return res.sendFile(path.join(__dirname, "search", "page.html"));
    } else if (mp !== undefined) {
      return res.sendFile(path.join(__dirname, "search", "file.html"));
    }

    return res.status(404).send("Not Found");
  }
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
