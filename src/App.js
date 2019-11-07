import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Words from "./pages/Words";
import style from "./App.module.css";

export default () => {
    return (
        <div>
            <Router>
                <Nav />
                <div className={"container " + style.body}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/settings" component={Settings} />
                        <Route exact path="/words" component={Words} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};
