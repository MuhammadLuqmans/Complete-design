import { response } from "express";
import ProductSch from "../Schema/ProductSchema.js";


export const PostProducts = (request , response) => {
    try{
        const products = ProductSch(request.body);
        products.save();
        response.status(200).json('Data is successfully save')
    }catch(error){
        response.status(500).json(error)
        console.log('error during send data')
    }
}

export const getProducts = async(requset , response)=>{
    try{
      let product = await ProductSch.find({}) 
       response.status(200).json(product);
    }catch(error){
        response.status(500).json(error);
    }
 
}

export const DeleteDocuments = async (request ,response) => {
    console.log(request.params.id)
    try{
        const DleDoc = await ProductSch.findById(request.params.id);
        await DleDoc.delete();
    }catch(error){
        response.status(500).json('delete successfully')
    }
}

export const EditeDocuments = async (request ,response) => {
    try{
        const EditDoc = await ProductSch.findById(request.params.id);
        response.status(200).json(EditDoc);
    }catch(error){
        response.status(500).json(error)
    }
}

export const handleUpdates = async (request , response )=>{
    try{
        await ProductSch.findByIdAndUpdate(request.params.id , { $set : request.body }) // $set: change object complete , $push : add object in array  ,$addToSet : add changes in object of array
        response.status(200).json('Product is updated')
    }catch(error){
        response.status(500).json('Error during update post in controllers')
    }
}