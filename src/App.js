import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Words from "./pages/Words";
import Mode from "./pages/Mode";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import { store, persistor } from "./store.js";
import Loader from "components/Loader";
import { loadData } from 'reducers/main.js'
import style from "./App.module.css";

export default () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await store.dispatch(loadData());
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return <Loader loading />;
    }

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router basename={process.env.PUBLIC_URL}>
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
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>
            </PersistGate>
        </Provider>
    );
};
