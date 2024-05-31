import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    comment:{
        type:String,
        required:true
    },
    post:{
        type:Schema.Types.ObjectId,
        ref:"Post"
    }
},{timestamps:true})

export const commentModel = mongoose.model("Comment", CommentSchema);