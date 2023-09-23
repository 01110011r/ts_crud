"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const user_1 = require("../controller/user");
exports.userRoute = (0, express_1.Router)();
exports.userRoute.get("/api/users", user_1.getAllUser);
exports.userRoute.post("/api/user", user_1.getAllUser);
