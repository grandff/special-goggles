import React from "react";
import { Link, Route, useParams } from "react-router-dom";
import BoardView from "./BoardView";

const BoardList = ({boardObj, isOwner}) => {

    return(
        <>
            <div>
                <div>
                    header bar..{isOwner && <><button>Edit</button><button>Delete</button></> } 
                    <button><Link to={`/boardView/${boardObj.id}`}>더보기</Link></button>                              
                </div>
                <h4>{boardObj.TTL}</h4>
                <p>{boardObj.REG_DATE}</p>                                           
            </div>
        </>
    );
}

export default BoardList;