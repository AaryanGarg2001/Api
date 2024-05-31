import bcrypt from "bcrypt"
import { userModel } from "../db/users/models/user";

export async function createUser(data:any) {
    data.password = bcrypt.hash(data.password,14);
    return await userModel.create(data)
}

export async function findUserById(userId:string) {
    return await userModel.findById(userId);
}

export async function findUserByEmail(email:string) {
    return await userModel.findOne({email})
}
export async function findUserByUsername(username:string) {
    return await userModel.findOne({username})
}

export async function isUsernameExist(username:string) {
    return await userModel.exists({username})
}

export async function isEmailExist(email:string) {
    return await userModel.exists({email})
}

export async function comparePassword(userPassword:string, password:string) {
    return await bcrypt.compareSync(userPassword,password);
}