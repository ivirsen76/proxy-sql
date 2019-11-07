import React from "react";
import NavLink from './NavLink'
import { Link } from "react-router-dom";

export default props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <Link className="navbar-brand" to="/">
                    Home
                </Link>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <NavLink to="/settings">Settings</NavLink>
                        <NavLink to="/words">Keywords</NavLink>
                        <NavLink to="/mode">Mode</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
