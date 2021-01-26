import { dbService } from "fbase";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const BoardView = () => {    
    const {id} = useParams();
    let boardObject;
    
    useEffect(() => {
        boardObject = dbService.collection("board1").doc({id});
    }, []);

    return(
        <>
            <h1>hi mother fucker</h1>
            <h5>{id}</h5>      
            <h6>{boardObject.TTL}</h6>    
        </>
    );
}

export default BoardView;