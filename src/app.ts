import express, { type Request, type Response } from "express";
import mainRoute from "./routes/mainRoute";

const app = express();
const port = 3000;

app.use("/", mainRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
