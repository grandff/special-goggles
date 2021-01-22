import React from "react";
import { Link } from "react-router-dom";

const StatusBar = ({userObj}) => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to ="/settings">Settings</Link>
                </li>
                <li>
                    <Link to = "/profile">Profile</Link>
                </li>
                <li>
                    <Link to ="/temp1">temp1</Link>
                </li>                
            </ul>
        </nav>
    );
}

export default StatusBar;