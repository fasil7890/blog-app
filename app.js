import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

mongoose.set('strictQuery', true);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);


mongoose.connect("mongodb+srv://admin:8hiBa4DDQxfKXn2P@cluster0.e2hakwz.mongodb.net/Blog?retryWrites=true&w=majority").then(()=>app.listen(5000)).then(()=>console.log("coonected successfully")).catch((err)=>console.log(err));






//password: 8hiBa4DDQxfKXn2P    username:admin