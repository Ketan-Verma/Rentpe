const mongoose = require("mongoose")

const articleSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    owner:{
        type:String,
        required:[true,"Please add a text owner"]
    },
    address:{
        type:String,
        required:[true,"Please add a text address"]
    },
    rent:{
        type:String,
        required:[true,"Please add a rent value"]
    },
    stat:{
        type:String,
        required:[true,"Please add a stat value"]
    },
    tags:{
        type:[String]
    },
    description:{
        type:String,
        required:[true,"please add description"]
    },
    security:{
        type:String,
        required:[true,"please add security"]
    },
    coords:{
        type:String,
        required:[true,"please add coords"]
    },
    

},{timestamps:true})
module.exports = mongoose.model('Article',articleSchema)