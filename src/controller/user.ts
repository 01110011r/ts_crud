import { Request, Response } from "express";
import { UserModel } from "../model/user.model";

export const getAllUser=async(req:Request, res:Response)=>{
    try {
        const data=await UserModel.findAll();
        return res.send({msg:"success", data});
    } catch (error) {
        console.log(error);
        res.send({
            msg:"??????????"
        })
    }
};


export const createUser=async(req:Request, res:Response)=>{
    try {
        const data=req.body;
        if(!data.username){
            return res.send({msg:"malumot to'liq umas!"});
        }
        const newUser=await UserModel.create({data});

        return res.send({
            msg:"saccess",
            newUser
        });
    } catch (error) {
        console.log(error);
        res.send({
            msg:"??????????"
        })
    }
};



export const updateUser=async(req:Request, res:Response)=>{
    try {
        const data=req.body;
        const {user_id}=req.params;
        if(!data.username){
            return res.send({msg:"malumot to'liq umas!"});
        }

        if(!user_id){
            return res.send({msg:"user_id yo'qku :("});
        }
        const newUser=await UserModel.update(data, {where:{user_id}});

        return res.send({
            msg:"saccess",
            newUser
        });
    } catch (error) {
        console.log(error);
        res.send({
            msg:"??????????"
        })
    }
};



export const deleteUser=async(req:Request, res:Response)=>{
    try {
        const {user_id}=req.params;
      
        if(!user_id){
            return res.send({msg:"user_id yo'qku :("});
        }
        const delet=await UserModel.destroy({where:{user_id}});

        return res.send({
            msg:"saccess",
            delet
        });
    } catch (error) {
        console.log(error);
        res.send({
            msg:"??????????"
        })
    }
};