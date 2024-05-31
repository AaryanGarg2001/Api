import mongoose from "mongoose"
import { title } from "process";

const Schema = mongoose.Schema;

const PostSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type: String,
        required: true
    },
    body:{
        type:String,
    },
    likes:[{
        type:Schema.Types.ObjectId,
        ref: "Like"
    }],
    comments:[{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    }]
},{timestamps:true})

export const postModel=mongoose.model("Post",PostSchema)