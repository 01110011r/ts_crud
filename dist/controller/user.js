"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getAllUser = void 0;
const user_model_1 = require("../model/user.model");
const getAllUser = async (req, res) => {
    try {
        const data = await user_model_1.UserModel.findAll();
        return res.send({ msg: "success", data });
    }
    catch (error) {
        console.log(error);
        res.send({
            msg: "??????????"
        });
    }
};
exports.getAllUser = getAllUser;
const createUser = async (req, res) => {
    try {
        const data = req.body;
        if (!data.username) {
            return res.send({ msg: "malumot to'liq umas!" });
        }
        const newUser = await user_model_1.UserModel.create({ data });
        return res.send({
            msg: "saccess",
            newUser
        });
    }
    catch (error) {
        console.log(error);
        res.send({
            msg: "??????????"
        });
    }
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    try {
        const data = req.body;
        const { user_id } = req.params;
        if (!data.username) {
            return res.send({ msg: "malumot to'liq umas!" });
        }
        if (!user_id) {
            return res.send({ msg: "user_id yo'qku :(" });
        }
        const newUser = await user_model_1.UserModel.update(data, { where: { user_id } });
        return res.send({
            msg: "saccess",
            newUser
        });
    }
    catch (error) {
        console.log(error);
        res.send({
            msg: "??????????"
        });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        if (!user_id) {
            return res.send({ msg: "user_id yo'qku :(" });
        }
        const delet = await user_model_1.UserModel.destroy({ where: { user_id } });
        return res.send({
            msg: "saccess",
            delet
        });
    }
    catch (error) {
        console.log(error);
        res.send({
            msg: "??????????"
        });
    }
};
exports.deleteUser = deleteUser;
