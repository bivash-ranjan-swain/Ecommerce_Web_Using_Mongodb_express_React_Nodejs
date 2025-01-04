import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv/config";

const app = express();

app.use(cors());
app.options("*", cors());
// middleware
app.use(bodyParser.json());

import catagoryRoutes from './routes/catagory.js';

app.use('/api/catagory', catagoryRoutes);

// database
mongoose.connect(process.env.mongo_uri, {
  dbName: 'bivashranjanswain637'
})
.then(()=>{
  console.log("Database connection is ready...");
})
.catch(()=>{
  console.log("err")
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
//server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`); 
});
