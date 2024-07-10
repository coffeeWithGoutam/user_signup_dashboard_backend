import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// for router defined
app.use("/api/v1", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
