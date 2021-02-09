import React, { useEffect, useState } from "react";
import {v4 as uuid4} from "uuid";
import draftToHtml from 'draftjs-to-html';
import {dbService, storageService} from "fbase";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link, Route, useHistory } from "react-router-dom";

const BoardForm = ({userObj}) => {
    const history = useHistory();
    const [ttl, setTtl] = useState("");
    const [ctt, setCtt] = useState(EditorState.createEmpty());
    const [textCtt, setTextCtt] = useState("");
    const [attachment, setAttachment] = useState("");
    const [radioVal, setRadioVal] = useState("");

    useEffect(() => {
        setRadioVal("1");
        editorChangeMode("1");
    }, []);

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
            CTT : (radioVal === "1" ? draftToHtml(convertToRaw(ctt.getCurrentContent())) : textCtt) ,
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
        else if(name === "mode"){
            setRadioVal(value);
            editorChangeMode(value);
        }
        else if(name === "textCtt")  setTextCtt(value);         // textarea
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

    const editorChangeMode = (val) => {        
         const editorCtt = document.querySelector("#editor-ctt");
         const textCtt = document.querySelector("#text-ctt");

         if(editorCtt !== "undefined" && textCtt !== "undefined"){
             editorCtt.style.display = (val === '1' ? "" : "none");
             textCtt.style.display = (val === '2' ? "" : "none");        
         }
    }

    return(
        <>
            <h1>Board Form</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label><input type="radio" name="mode" value="1" onChange={onChange} checked={radioVal === "1" ? true : false} />에디터</label>
                    <label><input type="radio" name="mode" value="2" onChange={onChange} checked={radioVal === "2" ? true : false}/>텍스트</label>
                </div>
                <div>
                    <input type="text" name="ttl" value={ttl} onChange={onChange} placeholder="제목을 입력해주세요." />
                </div>
                <div id="editor-ctt">                    
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
                <div id="text-ctt">
                    <textarea name="textCtt" value={textCtt} onChange={onChange}></textarea>
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