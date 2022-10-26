import Card from './Card'


const Recommended = ({articles}) => {
  // let [data,setData] = useState([]);
  // setData(articles);
  return (
    <div className='recs section'>
        <div className="cat-bar">
            <h3>Recommended</h3>
            <a to={"/home"}>see all  </a>
        </div>
        <div className="card-container">
            {articles ? (
                articles.map((article)=>
                (
                <Card key={article._id} data={article}/>
                )
                )
            ):(<><p>nothing to show</p></>)
        }
        </div>

    </div>
  )
}

export default Recommended