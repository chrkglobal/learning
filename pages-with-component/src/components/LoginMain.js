import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function LoginMain(props) {
    const isLogedin = false;

    
    return (
        <div style={{ display: 'flex' }}>
            {isLogedin ? <SignUp /> : <Login /> }
        </div>
    )
}
export default LoginMain;
