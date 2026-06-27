import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

import { generateInsights } from "./controller.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({
  limit: "20mb",
}));

const upload = multer({
  storage: multer.memoryStorage(),
});

app.post(
  "/api/process",
  upload.single("file"),
  generateInsights
);

app.listen(5000, () => {
  console.log("Server running");
});