import Card from './Card'
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
        {articles.length>0 ?
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

export default Categories