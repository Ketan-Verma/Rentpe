const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// POST /api/users Public
const registerUser = asyncHandler(async (req,res) => {
    const  {name,email,password} = req.body

    if(!name||!email||!password){
        res.status(400)
        throw new Error('Add all Fields')
    }

    // const userExists = await User.findOne({ email })

    // if(userExists){
    //     res.status(400)
    //     throw new Error('User already exists')
    // }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user =await User.create({
        name,
        email,
        password:hashedPassword
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid User Data")
    }
})

// POST /api/users/login Public
const loginUser = asyncHandler(async (req,res) => {
    const {email,password}= req.body
    
    const user = await User.findOne({email})
    
    if(user&&(await bcrypt.compare(password,user.password))){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid Credentials')
    }
    // res.json({message:'Login User'})
})

// GET /api/users/me Private
const getMe = asyncHandler(async (req,res) => {
    // const {_id,name,email} =  await User.findById(req.user.id)
    res.status(200).json(req.user)
})

const generateToken=(id)=>{
    return jwt.sign({ id },process.env.JWT_SECRET)
}

module.exports={registerUser,loginUser,getMe}