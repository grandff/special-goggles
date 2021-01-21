import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

const AppRouter = ({isLoggedIn, userObj}) => {
    return(
        <Router>
            {isLoggedIn }       
        </Router>
    );
}

export default AppRouter;