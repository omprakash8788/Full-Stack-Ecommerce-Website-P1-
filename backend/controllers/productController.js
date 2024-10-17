import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js';
// import { Promise } from 'mongoose';

const addProduct = async (req, res)=>{
    try {
        const {name, description, price, category, subCategory, sizes, bestSeller}=req.body;

        const image1=req.files.image1 && req.files.image1[0]
        const image2=req.files.image2 && req.files.image2[0]
        const image3=req.files.image3 && req.files.image3[0]
        const image4=req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item)=>item !== undefined)

        const imageUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{
                    resource_type:"image"
                })
                return result.secure_url;
            })
        );

        const productData ={name, description, category, price:Number(price), subCategory, bestSeller:bestSeller==="true"? true:false, sizes:JSON.parse(sizes), image:imageUrl, date:Date.now()}

        console.log(productData);
        
        // console.log(imageUrl);

        const product = new productModel(productData);
        await product.save();

        res.json({success:true, message:"Product added"});

        
        

        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
        
    }

}

const listProducts = async (req, res)=>{
    
}

const removeProduct = async (req, res)=>{
    
}

const singleProduct = async (req, res)=>{
    
}


export {listProducts, addProduct, removeProduct, singleProduct}