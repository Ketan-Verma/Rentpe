// import Categories from "../components/Categories"
import MainCard from "../components/MainCard"
// import Recommended from "../components/Recommended"
import {useDispatch,useSelector} from "react-redux"
import {useEffect} from 'react' 
import {reset,getAllArticles} from '../features/article/articleSlice'
import { useNavigate } from "react-router-dom"
import Card from "../components/Card"

const Categories = ({articles}) => {
  return (
    <div className='cats section'>
        <div className="cat-bar">
            <h3>Categories</h3>
            <a to={"/home"}>see all  </a>
        </div>
        <div className="filter-container">
            <ul>
                <li className='selected'>all</li>
                <li>Halls</li>
                <li>Flats</li>
                <li>1BHK</li>
                <li>2BHK</li>
                <li>3BHK</li>
            </ul>
        </div>
        <div className="card-container">
        { articles.length>0 ?
                (
                    articles.map((article)=>
                (
                <Card key={article._id} data={article}/>
                )
                ))
                :
                (<></>)
        }
        </div>

    </div>
  )
}
const Recommended = ({articles}) => {
  return (
    <div className='recs section'>
        <div className="cat-bar">
            <h3>Recommended</h3>
            <a to={"/home"}>see all  </a>
        </div>
        <div className="card-container">
            { articles.length>0 ?
                (
                  articles.map((article)=>
                (
                <Card key={article._id} data={article}/>
                )
                ))
                :
                (<></>)
        }
        </div>

    </div>
  )
}

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