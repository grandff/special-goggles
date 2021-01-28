import React, { useEffect, useState } from "react";
import {v4 as uuid4} from "uuid";
import draftToHtml from 'draftjs-to-html';
import {dbService, storageService} from "fbase";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link, Route, useHistory } from "react-router-dom";

const BoardForm = ({userObj}) => {
    /*
        에디터 모드를 
        에디터 , 그냥 일반 텍스트필드
        두개로 나눠서 작업하기..    
    */
    const history = useHistory();
    const [ttl, setTtl] = useState("");
    const [ctt, setCtt] = useState(EditorState.createEmpty());
    const [attachment, setAttachment] = useState("");

    const onSubmit = async (event) => {
        if(ttl === "") {
            alert("제목을 입력해주세요.");
            return;
        }

        if(ctt === ""){
            alert("내용을 입력해주세요.");
            return;
        }
        
        event.preventDefault();
        let attachmentUrl = "";
        if(attachment !== ""){
            const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuid4()}`);
            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }

        const current = new Date();
        const boardObj = {
            TTL : ttl,
            CTT : draftToHtml(convertToRaw(ctt.getCurrentContent())),
            REG_DATE : current.toLocaleString(),
            REG_ID : userObj.uid,
            attachmentUrl
        }

        // db insert
        await dbService.collection("board1").add(boardObj);
        clearState();

        alert("정상적으로 등록됐습니다.");
        history.push("/board");        
    }

    const onChange = (event) => {                       // 제목
        const {target : {name, value}} = event;
        if (name === "ttl") setTtl(value);        
    }

    const onEditorChange = (ctt) => {                   // 에디터 내용                          
        setCtt(ctt);
    }

    const clearState = () => {
        setTtl("");
        setCtt("");
        setAttachment("");
    }

    // image file input
    const onFileChange = (event) => {
        const {target : {files}} = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget : {result}} = finishedEvent
            setAttachment(result);
        }
        reader.readAsDataURL(theFile);
    }

    // clear image file
    const onClearAttachment = () => setAttachment("");

    return(
        <>
            <h1>Board Form</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" name="ttl" value={ttl} onChange={onChange} placeholder="제목을 입력해주세요." />
                    <Editor
                    editorState={ctt}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorChange}
                    placeholder="내용을 작성해주세요."
                    localization={{locale : 'ko'}}                    
                    />
                </div>
                <div>
                    <input type="file" accept="image/*" onChange={onFileChange} />
                    {attachment && (
                        <div>
                            <img src={attachment} alt="attach_img" />
                            <button onClick={onClearAttachment}>Remove</button>
                        </div>
                    )}
                </div>
                <div>
                    <input type="submit" value="제출" />
                    <button>취소</button>
                </div>
            </form>
        </>
    );
}

export default BoardForm;