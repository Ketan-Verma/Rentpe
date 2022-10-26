const express = require("express")
const router = express.Router()
const {thisArticle,getArticles,setArticle,updateArticle,deleteArticle, getMyArticles} = require('../controllers/articleController')
const {protect} = require('../middleware/authMiddleware')


router.route('/').get(getArticles).post(protect ,setArticle)
router.route('/:id').put(protect,updateArticle).delete(protect,deleteArticle).get(thisArticle)
router.route('/my/:id').get(protect,getMyArticles)
module.exports = router