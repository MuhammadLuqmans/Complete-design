import mongoose from "mongoose";


const ProductSchema = mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: String,
    },
    category:{
        type:String,
    },
    colors: {
        type:String
    },
    dispcription: {
        type: String,
    },
    sku: {
        type: String,
    },
    image:{
        type:String,
    }
})

const ProductSch = mongoose.model('GrillsTypes', ProductSchema )

export default ProductSch;