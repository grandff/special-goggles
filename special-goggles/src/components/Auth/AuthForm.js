import { authService } from "fbase";
import React, { useState } from "react";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");    
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    
    const toggleAccount = () => setNewAccount((prev) => !prev);       
    
    const onChange = (event) => {
        const {target : {name, value}} = event;        
        if (name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value);
        }else if(name === "password2"){
            setPassword2(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        /* validate */
        if(newAccount){
            const num = password.search(/[0-9]/g);
            const eng = password.search(/[a-z]/ig);
            const spe = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

            if(password.length < 8 || password.length > 20){
                setError("8자리 ~ 20자리 이내로 입력해주세요.");
                return false;
            }

            if(password.search(/\s/) !== -1){
                setError("비밀번호는 공백 없이 입력해주세요.");
                return false;
            }

            if(num < 0 || eng < 0 || spe < 0){
                setError("영문, 숫자, 특수문자를 혼합하여 입력해주세요. ");
                return false;
            }

            if(password !== password2){                
                setError("비밀번호가 일치하지 않습니다.");
                return false;
            }                                

            const result = await authService.fetchSignInMethodsForEmail(email);        
            if(result.length !== 0){                      
                setError("이미 등록된 아이디 입니다.");          
                return false;
            }        
        }

        try{            
            if(newAccount){
                // create account
                await authService.createUserWithEmailAndPassword(
                    email, password
                );
            }else{
                // log in
                await authService.signInWithEmailAndPassword(
                    email, password
                );
            }
        }catch(error){
            setError(error.message);
        }
    };    

    return(
        <>
            <form method="post" onSubmit={onSubmit}>
                <input name = "email" type="email" placeholder="Email" required value={email} onChange = {onChange}/>                
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                {newAccount && <input name ="password2" type="password" placeholder="Password One more Time" required value={password2} onChange={onChange}/>}                
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
                {error && <span className="authError">{error}</span>}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</span>
        </>
    );
}

export default AuthForm;