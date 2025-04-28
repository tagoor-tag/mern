import "./Nav.css"

function Nav(){
    return(
        <nav>
            <div className="brand">
                E-Commerce Application
            </div>
            <div className="links">
                <a href="#home">Home</a>
                <a href="#profile">Profile</a>
                <a href="#user">User</a>
                <a href="#products">Products</a>
                <a href="#mycart">Mycart</a>

            </div>

            <div className="icons">
                <button>Logout</button>
            </div>

        </nav>
    )
}

export default Nav;