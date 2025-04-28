import { Link } from "react-router-dom";
import "./Nav.css"

function Nav(){
    return(
        <nav>
            <div className="brand">
                E-Commerce Application
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/men-fasion">Men's fasion</Link>
                <Link to="/women-fasion">Women's fasion</Link>
                <Link to="/electronics">Electronics</Link>
                <Link to="/jewellery">Jewellery</Link>

            </div>

            <div className="icons">
                <button>Logout</button>
            </div>

        </nav>
    )
}

export default Nav;