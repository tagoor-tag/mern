import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h2>Feedback</h2>
            <div id="navLinks">
                <Link to="/">Feedback form</Link>
                <Link to="/allfeedbacks">All Feedbacks</Link>
            </div>
        </nav>
    )
}

export default Nav;