import { Router } from "express";
import { getAllUser } from "../controller/user";

export const userRoute=Router();


userRoute.get("/api/users", getAllUser);
userRoute.post("/api/user", getAllUser);