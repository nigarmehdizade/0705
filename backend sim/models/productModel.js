import mongoose from "mongoose";

const productSchema=mongoose.Schema(
{
    image:{type:String,requried:true},
    name:{type:String,requried:true},
    price:{type:String,requried:true}
},{timestamps:true});

const productModel=mongoose.model('Product',productSchema)

export default productModel;
