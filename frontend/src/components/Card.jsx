
import {Link} from "react-router-dom";

const Card = ({data}) => {
  return (
    <Link style={{all:"unset"}} to={data ? ("/details/"+data._id):"/"}>
      <div className="card shadow">
        <figure>
          <img
            src="https://images.adsttc.com/media/images/60a6/7692/f91c/811e/6100/00ec/newsletter/SW_FleetHouse_44_JackHobhouse.jpg?1621522058"
            alt=""
          />
        </figure>
        <div className="details">
          <div className="name">
            {/* <BsPerson className="icon" /> */}
            <h3>{data ? data.owner : "Raj Verma" }</h3>
          </div>
          <div className="address">
            <p>{data ? data.address : "some random location"}</p>
          </div>
          <div className="card-tags">
            <ul>
              {data && (data.tags.map(
                (tag,i)=>(<li key={i}>{tag}</li>)
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
