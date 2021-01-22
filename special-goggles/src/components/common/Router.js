import Auth from "components/Auth/Auth";
import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from "./Navigation";

const AppRouter = ({isLoggedIn, userObj}) => {
    return(
        <Router>
            {isLoggedIn && <Navigation userObj = {userObj} /> }    
            <Switch>
                {isLoggedIn ? (
                    <div>
                        <Route exact path = "/"></Route>
                        <Route exact path = "/profile"></Route>
                        <Route exact path = "/settings"></Route>
                    </div>
                ):(
                    <Route exact path = "/">
                        <Auth />
                    </Route>
                )}
            </Switch>   
        </Router>
    );
}

export default AppRouter;