import React from "react";
import { Link } from "react-router-dom";

const BoardList = ({boardObj, isOwner}) => {
    return(
        <>
            <div>
                <div>
                    header bar..{isOwner && <><button>Edit</button><button>Delete</button></> } <button>
                    <Link to={
                        {pathname : '/boardView',
                        state : {
                            bid : boardObj.id
                        }}
                    }>더보기</Link></button>
                </div>
                <h4>{boardObj.TTL}</h4>
                <p>{boardObj.REG_DATE}</p>                                           
            </div>
        </>
    );
}

export default BoardList;