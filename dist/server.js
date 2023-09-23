"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_js_1 = require("./config/index.js");
const user_js_1 = require("./routes/user.js");
const main = async () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    try {
        app.use(user_js_1.userRoute);
        await index_js_1.newSequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    app.listen(7000, () => console.log('done!'));
};
main();
