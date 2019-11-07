import React from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

export default ({ to, children }) => {
    const location = useLocation();

    return (
        <li
            className={classnames("nav-item", {
                active: location.pathname.startsWith(to)
            })}
        >
            <Link className="nav-link" to={to}>
                {children}
            </Link>
        </li>
    );
};
