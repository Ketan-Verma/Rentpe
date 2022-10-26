import Categories from "../components/Categories"
import MainCard from "../components/MainCard"
import Recommended from "../components/Recommended"
import {useDispatch,useSelector} from "react-redux"
import {useEffect} from 'react' 
import {reset,getAllArticles} from '../features/article/articleSlice'
import { useNavigate } from "react-router-dom"

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const { articles, isLoading, isError, message } = useSelector(
        (state) => state.articles
      )

      useEffect(()=>{
        if(isError){
          console.log(message)
        }
        dispatch(getAllArticles())
        return()=>{
          dispatch(reset())
        }
    
      },[isError,message,dispatch,navigate])

      if(isLoading||!articles)return <p>Hod Pratik nanga</p>
 
      return (
    <div className="home">
        <MainCard/>
        <Categories articles={articles}/>
        <Recommended articles={articles}/>
    </div>
  )
}

export default Home