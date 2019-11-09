import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <div>
            <h2>404 ERROR</h2>
            <div style={{ marginBottom: "1em" }}>
                Sorry, an error has occured, Requested page not found!
            </div>
            <Link className="btn btn-primary" to="/">
                Take Me Home
            </Link>
        </div>
    );
};
