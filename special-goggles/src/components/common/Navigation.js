import React from "react";
import {Link} from "react-router-dom";

const Navigation = ({userObj}) => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to ="/">Dashboard</Link>
                </li>                
                <li>
                    <Link to ="/board">board</Link>
                </li>
                <li>
                    <Link to ="/calendar">calendar</Link>
                </li>
                <li>
                    <Link to ="/bot">Bot</Link>
                </li>
                <li>
                    <Link to ="/smile">Smile</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;