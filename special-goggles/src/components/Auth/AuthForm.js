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

    const onChange = (event) => {
        const {target : {name, value}} = event;
        if (name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value);
        }
    };

    const onSubmit = (event) => {

    };

    return(
        <>
            <form method="post" onSubmit={onSubmit}>
                <input name = "email" type="email" placeholder="Email" required value={email} onChange = {onChange}/>
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