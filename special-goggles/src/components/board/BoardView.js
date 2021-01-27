import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import { useParams } from "react-router-dom";

const BoardView = () => {    
    const {id} = useParams();
    const [board, setBoard] = useState("");    
    
    useEffect(() => {
        getBoard();
    }, []);

    const getBoard = async () => {        
        const getId = `${id}`;
        const boardObj = await dbService.collection("board1").doc(getId).get()
        const boardVal = boardObj.data();        
        setBoard(boardVal);
    }

    

    return(
        <>
            <h1>hi mother fucker</h1>
            <h5>{id}</h5>      
            <h6>제목 : {board.TTL}</h6>
            <h6>내용 : {board.CTT}</h6>
            <h6>등록일 : {board.REG_DATE}</h6>
        </>
    );
}

export default BoardView;