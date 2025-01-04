import express from "express";
const router = express.Router();
import Catagory from '../models/catagory.js';

router.get('/', async(req, res)=>{
    const catagoryList = await Catagory.find();

    if (!catagoryList){
        res.status(500).json({success: false})
    }
    res.send(catagoryList);
});

export default router;
