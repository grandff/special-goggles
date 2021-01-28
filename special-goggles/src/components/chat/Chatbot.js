import React, { useEffect } from "react";

const Chatbot = () => {
    // chat bot 초기화 ...
    const init = () => {
        const inputField = document.querySelector("#input");
        inputField.addEventListener("keydown", function (e){
            if(e.code === "Enter"){
                
            }
        });
    }

    useEffect(() => {
        init();
    }, [])

    return(
        <div>
            <h1>is chat bot</h1>
            <div id="bot-container">
                <div id="chat">
                    <div id="messages"></div>
                    <input id="input" type="text" />
                </div>
            </div>
        </div>
    );
}

export default Chatbot;