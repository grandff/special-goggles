import React from "react";
import {Link} from "react-router-dom";

const Navigation = ({userObj}) => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to ="/"></Link>
                </li>
                <li>
                    <Link to = "/profile"></Link>
                </li>
                <li>
                    <Link to ="/board"></Link>
                </li>
                <li>
                    <Link to ="/calendar"></Link>
                </li>
                <li>
                    <Link to ="/bot"></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;