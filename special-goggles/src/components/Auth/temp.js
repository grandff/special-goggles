/*import { authService } from "fbase";
import React, { useState } from "react";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [inputName, setInputName] = useState("");
    const [phone1, setPhone1] = useState("");
    const [phone2, setPhone2] = useState("");
    const [phone3, setPhone3] = useState("");
    const [gender, setGender] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    
    const toggleAccount = () => setNewAccount((prev) => !prev);   
    const toggleCheckFlag = () => idCheckFlag = !idCheckFlag; 

    let idCheckFlag = false;

    const onChange = (event) => {
        const {target : {name, value}} = event;
        if (name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value);
        }else if(name === "password2"){
            setPassword2(value);
        }else if(name === "name"){
            setInputName(value);
        }else if(name === "phone1"){
            setPhone1(value);
        }else if(name === "phone2"){
            setPhone2(value);
        }else if(name === "phone3"){
            setPhone3(value);
        }else if(name === "gender"){
            setGender(value);
        }
    };

    const onSubmit = async (event) => {
        event.prevendDefault();        
        if(newAccount){
            if(password !== password2){
                alert("비밀번호가 일치하지 않습니다.");
                return false;
            }

            if(phone1 !== "" || phone2 !== "" || phone3 !== ""){
                if(phone1 === "" && phone2 === "" && phone3 === ""){
                    alert("모든 핸드폰 번호를 입력해주세요.");
                    return false;
                }
            }

            if(!idCheckFlag){
                alert("Email 중복 체크를 해주세요.");
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

            }
        }catch(error){
            setError(error.message);
        }
    };

    const checkEmailAddress = async () => {
        const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	
        if(email === ""){                       // 빈값 체크
            alert("이메일 주소를 입력해주세요.");
            idCheckFlag = false;
            return false;
        }

        if(!regExp.test(email)){
            alert("올바른 이메일 주소를 입력해주세요.");
            idCheckFlag = false;
            return false;
        }

        const result = await authService.fetchSignInMethodsForEmail(email);        
        if(result.length !== 0){
            alert("이미 등록된 아이디 입니다.");
            idCheckFlag = false;
            return false;
        }        

        idCheckFlag = true;
    }

    return(
        <>
            <form method="post" onSubmit={onSubmit}>
                <input name = "email" type="email" placeholder="Email" required value={email} onChange = {onChange} onKeyDown = {toggleCheckFlag}/>
                {newAccount && <button onClick={checkEmailAddress} >아이디 중복 체크</button>}
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                {newAccount && (
                    <>
                        <input name ="passowrd2" type="password" placeholder="Password One more Time" required value={password2} onChange={onChange}/>
                        <input name="name" type="text" placeholder="Input your name" required value={inputName} onChange={onChange}/>
                        <input name="phone1" type="text" value={phone1} onChange={onChange}/> - 
                        <input name="phone2" type="text" value={phone2} onChange={onChange}/> -
                        <input name="phone3" type="text" value={phone3} onChange={onChange}/>
                        <span>성별</span>
                        <select name="gender" value={gender} onChange={onChange}>
                            <option value="male">남성</option>
                            <option value="female">여성</option>
                        </select>
                    </>
                ) }
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
                {error && <span className="authError">{error}</span>}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</span>
        </>
    );
}

export default AuthForm;

*/