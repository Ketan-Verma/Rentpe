import {FaHome,FaHeart,FaUserAlt} from "react-icons/fa"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar">
        <ul>
            <Link to={"/"}>
            <li className="selected"><FaHome/></li>
            </Link>
            <Link to={"/liked"}>
            <li><FaHeart/></li>
            </Link>
            <Link to={"profile"}>
            <li><FaUserAlt/></li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar