import express from "express";
import authRoutes from "./Routes/authRoutes.js";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";

dotenv.config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// SERVIDOR
const app = express();
app.listen(3001, () => {
  console.log(`Server on Port: ${PORT}`);
});

//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//RUTAS
app.use(authRoutes);

//DATABASE
import "./db.mjs";
