import mongoose from "mongoose";

const catagorySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    images:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    }
})
export default Catagory = mongoose.model('Catagory', catagorySchema);