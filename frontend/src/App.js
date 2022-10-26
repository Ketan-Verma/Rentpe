import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Details from "./pages/Details"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Header/>
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home/>} />     
        <Route  path="/details/:id" element={<Details/>} />     

      </Routes>
    </div>
    </Router>
  )
}

export default App