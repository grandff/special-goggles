import React from "react";
import {authService} from "fbase";
import AuthForm from "./AuthForm";

const Auth = () => {
    return(
        <div>
            <AuthForm />
            <div>
                <button name="google">Continue with Google</button>
                <button nmae="github">Continue with Github</button>
            </div>
        </div>
    );
};

export default Auth;

