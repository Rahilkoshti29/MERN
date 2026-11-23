import express from "express";
import "dotenv/config";
import connectDB from "./config/dbconfig.js";
import indexRoute from "./routes/indexRoute.js";
import cors from "cors";

const PORT = process.env.PORT || 1200;
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", indexRoute);
app.listen(PORT, () =>
  console.log(`server started at http://localhost:${PORT}`),
);
