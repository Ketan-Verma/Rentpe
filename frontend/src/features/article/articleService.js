import axios from 'axios'

const API_URL = '/api/articles/'

// Create new article
const createArticle = async (articleData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, articleData, config)

  return response.data
}
// get all articles
// getAllArticles
const getAllArticles = async () => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }
  const response = await axios.get(API_URL)
  return response.data
}
// Get user Article
const getArticles = async (id) => {
  const response = await axios.get(API_URL+id)
  return response.data
}
const getMyArticles = async (id,token) =>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
 const response = await axios.get(API_URL+"my/"+id,config)
 return response.data 
}

// Delete user article
const deleteArticle = async (articleId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + articleId, config)

  return response.data
}

const articleService = {
  
  createArticle,getAllArticles,
  getArticles,getMyArticles,
  deleteArticle,
}

export default articleService
