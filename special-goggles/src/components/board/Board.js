import React, { useEffect, useState } from "react";
import {dbService} from "fbase";
import BoardList from "./BoardList";
import { Link } from "react-router-dom";

const Board = ({userObj}) => {

    const [board1s, setBoard1s] = useState([]);

    useEffect(() => {
        dbService.collection("board1").onSnapshot(snapshot => {
            const board1Array = snapshot.docs.map((doc) => ({id : doc.id, ...doc.data()}));
            setBoard1s(board1Array);
        });
    }, []);

    return(
        <div>
            <h1>Board</h1>
            <div>
                {board1s.length === 0 ? "등록된 글이 없습니다." : (
                    board1s.map((board) => {
                        <BoardList key = {board.id} boardObj = {board} isOwner = {board.REG_ID === userObj.uid} />
                    })
                )}                
            </div>
            <div>
                <button><Link to="/boardInsert">등록</Link></button>
            </div>
        </div>
    );
}

export default Board;