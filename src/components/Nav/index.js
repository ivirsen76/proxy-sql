import React from "react";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

export default props => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Proxy SQL
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <ul className="navbar-nav mr-auto">
                        <NavLink to="/settings">Settings</NavLink>
                        <NavLink to="/keywords">Keywords</NavLink>
                        <NavLink to="/mode">Mode</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
