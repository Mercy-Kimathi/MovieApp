import { Link } from "react-router-dom";
import "../css/navbar.css";
function Nav(){
    return (
        <nav className="navbar">
            <div className="navigate">
            <Link to="/">
               Movie App 
            </Link>
            </div>
            <div className="links">
            <Link to="/" className="navlink"> Home</Link>
            <Link to="/favourites" className="navfav"> favourites</Link>
            </div>
        </nav>
    )
};
export default Nav;