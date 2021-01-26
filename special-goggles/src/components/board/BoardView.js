import React from "react";
import { useParams } from "react-router-dom";

const BoardView = () => {
    
    const {id} = useParams();

    return(
        <>
            <h1>hi mother fucker</h1>
            <h5>{id}</h5>          
        </>
    );
}

export default BoardView;