import express, { Application }  from "express";
import { newSequelize } from "./config/index.js";
import { userRoute } from "./routes/user.js";


const main=async()=>{

const app: Application=express();
app.use(express.json());

try {
    app.use(userRoute);
    
    await newSequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.listen(7000, (): void=>console.log('done!'));

};

main();