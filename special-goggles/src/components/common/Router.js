import Auth from "components/Auth/Auth";
import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "routes/Home";
import Navigation from "./Navigation";
import StatusBar from "./StatusBar";

const AppRouter = ({isLoggedIn, userObj}) => {
    return(
        <Router>
            {isLoggedIn && <Navigation userObj = {userObj} /> }    
            {isLoggedIn && <StatusBar userObj = {userObj} /> }    
            <Switch>
                {isLoggedIn ? (
                    <div>
                        <Route exact path = "/">
                            <Home userObj={userObj} />
                        </Route>
                        <Route exact path = "/profile">


                        </Route>
                        <Route exact path = "/settings">

                            
                        </Route>
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