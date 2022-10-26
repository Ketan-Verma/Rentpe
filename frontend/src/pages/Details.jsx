import { useEffect } from "react";
import { FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";
// import { Link } from 'react-router-dom'
import ImageContainer from "../components/ImageContainer";
import Recommended from "../components/Recommended";
import {useNavigate, useParams} from "react-router-dom"
import { useDispatch,useSelector } from "react-redux";
import {getArticles,reset} from '../features/article/articleSlice'


const Details = () => {
  const images = [
    "https://media.designcafe.com/wp-content/uploads/2021/04/06183521/spacious-1-bhk-home-design-with-neutral-tones-and-minimal-furniture.jpg",
    "https://media.designcafe.com/wp-content/uploads/2021/04/06183531/u-shaped-modular-kitchen-design-in-1bhk-house-design.jpg",
    "https://media.designcafe.com/wp-content/uploads/2021/04/06183441/1bhk-home-interiors-with-luxurious-bedroom-with-wooden-shelves-and-storage-cabinets.jpg",
    "https://media.designcafe.com/wp-content/uploads/2021/04/06183540/white-and-dark-wood-laminate-tv-unit-for-1bhk-house-design.jpg",
    "https://media.designcafe.com/wp-content/uploads/2021/04/06183432/1bhk-home-design-with-foyer-unit-with-textured-wallpaper-pendant-lights.jpg",
  ];
  let data = {
    coords: "https://goo.gl/maps/PCUaznzBiqDY1fHw6",
    address: "23/11, Peace Avenue, Bhopal ",
    owner: "Ketan Verma",
    rent: "4000",
    security: "10,000",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpadebitis doloribus aperiam, laborum, incidunt accusamus explicabomollitia consectetur nihil voluptatem totam quaerat. Ad eligendiexplicabo totam ipsum facere quo asperiores!",
      tags:["1BHK","Flat","Bachelor","Nosmoke","Vegetarian","Boys"]
  };
  const {id}= useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { articles, isLoading, isError, message } = useSelector(
    (state) => state.articles
  )
useEffect(()=>{
    if(isError){
      console.log(message)
    }
    dispatch(getArticles(id))
    return()=>{
      dispatch(reset())
    }

  },[isError,message,dispatch,navigate])
  // console.log(articles)

  if(isLoading ||!articles)return <h1>Pratik farji HOD hai</h1>

  return (
    <div>
      <div className="details-card">
        <ImageContainer images={images} />
        <div className="btns">
          <a style={{ all: "unset", color: "red" }} href={articles ? articles.coords : data.coords}>
            <FaMapMarkerAlt />
          </a>

          <button style={{ all: "unset" }}>
            <FaRegHeart />
          </button>
        </div>
        <div className="details">
          <a style={{ all: "unset" }} href={articles ? articles.coords : data.coords}>
            <p className="address">{articles ? articles.address : data.address}</p>
          </a>
          <p>
            Owner: <strong>{articles ? articles.owner : data.owner}</strong>
          </p>
          <p className="rent">
            <span>
              Rent: <strong>Rs {articles ? articles.rent : data.rent}/M</strong>
            </span>

            {/* <span>
              Area: <strong>600 SqFt</strong>
            </span>{" "} */}
          </p>
          <p>
            Security (one time) : <strong>Rs {articles ? articles.security : data.security}</strong>{" "}
          </p>
        <div className="enquire">
          <button>Enquire </button>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{articles ? articles.description : data.description}</p>
        </div>
        <div className="tags">
          <ul>
            {
            articles.tags ?
            (articles.tags.map((tag,i)=>(<li className="shadow" key={i}>{tag}</li>)))
              :
              (
                data.tags.map((tag,i)=>(<li className="shadow" key={i}>{tag}</li>))
              )
          }
          </ul>
        </div>
        </div>
      </div>
      {/* <Recommended /> */}
    </div>
  );
};

export default Details;
