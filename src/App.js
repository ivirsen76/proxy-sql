import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Words from "./pages/Words";
import Mode from "./pages/Mode";
import { Provider } from "react-redux";
import { store, persistor } from "./store.js";
import style from "./App.module.css";

export default () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router basename="/proxy-sql">
                    <Nav />
                    <div className={"container " + style.body}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/settings"
                                component={Settings}
                            />
                            <Route exact path="/words" component={Words} />
                            <Route exact path="/mode" component={Mode} />
                        </Switch>
                    </div>
                </Router>
            </PersistGate>
        </Provider>
    );
};
