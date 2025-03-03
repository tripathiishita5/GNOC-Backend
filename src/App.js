import express from "express";
import cors from "cors";
import { PORT } from "./config/constant.js";
import dbConnection from "./config/dbConnection.js";
import userRouter from "./users/Routes/userRoute.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRouter);

dbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
    process.exit(1);
  });
