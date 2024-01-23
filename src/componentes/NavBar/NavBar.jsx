import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
       <Link to="/" className="logo">
        LOGO
       </Link>
    </header>
  )
}

export default NavBar