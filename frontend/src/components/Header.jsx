import {FaSearch} from "react-icons/fa"
const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <h2>RentPe</h2>
        </div>
        <div className="search">
            <FaSearch/>
        </div>
    </div>
  )
}

export default Header