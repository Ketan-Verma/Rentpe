const Article = require('../models/articleModel')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const getMyArticles = asyncHandler(async(req,res)=>{
    const article = await Article.find({"user":req.params.id})
    
    if(article.user.toString()!==req.user.id){
        res.status(401)
        throw new Error('user not authorised')
    }
    
    res.status(200).json(article)
})
const getArticles = asyncHandler(async (req, res) => {
    const articles = await Article.find().sort({updatedAt:-1})
    res.status(200).json(articles)
})

const setArticle = asyncHandler(async (req, res) => {
    
    if(!req.user){
        res.status(400)
        throw new Error("User not found")
    }
    const article = await Article.create({
  
        user:req.user.id,
        owner:req.body.owner,
        rent:req.body.rent,
        tags:req.body.tags,
        stat:req.body.stat,
        description:req.body.description,
        security:req.body.security,
        coords:req.body.coords,
        address:req.body.address,

    })
    res.status(200).json(article)
})
const thisArticle = asyncHandler(async (req,res)=>{
    const article = await Article.findById(req.params.id)
    if (!article) {
        res.status(400)
        throw new Error('Article not found')
    }
    res.status(200).json(article)

}
    )
const updateArticle = asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id)
    if (!article) {
        res.status(400)
        throw new Error('Article not found')
    }

    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    
    if(article.user.toString()!==req.user.id){
        res.status(401)
        throw new Error('user not authorised')
    }

    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json({
        message: `Updated Article ${req.params.id}`
    })
})

const deleteArticle = asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id)
    // console.log(article)
    if(!article){
        res.status(401)
        throw new Error('Article not found'+req.params.id)
}
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    
    if(article.user.toString()!==req.user.id){
        res.status(401)
        throw new Error('user not authorised')
    }

    await article.remove()
      res.status(200).json({ id: req.params.id })
    
})

module.exports = {
    getArticles,
    setArticle,
    updateArticle,
    deleteArticle,getMyArticles,thisArticle
}