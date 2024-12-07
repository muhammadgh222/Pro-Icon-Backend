import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.all("*", (req, res) => {
  res.send({
    message: "Hello",
  });
});

export default app;
