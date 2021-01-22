import React, { useEffect, useState } from "react";
import {dbService, storageService} from "fbase";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const BoardForm = ({userObj}) => {
    const [board, setBoard] = useState("");
    const [attachment, setAttachment] = useState("");

    useEffect(() => {

    }, [])

    const onSubmit = () => {

    }

    const onChange = () => {

    }

    return(
        <>
            <h1>Board Form</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" />
                    <Editor
                    editorState={board}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onChange}
                    />;
                </div>
                <div>

                </div>
                <div>

                </div>
            </form>
        </>
    );
}

export default BoardForm;