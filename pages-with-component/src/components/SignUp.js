import React from "react";
import LoginContent from "./LoginContent";

function Login() {
    return (
        <div style={{ display: 'flex' }}>
            <LoginContent />
            <div className="login-class">
                <h1>Sign Up</h1>
                <form action="">
                    <div class="imgcontainer">
                        <img src="../../avatar.png" alt="Avatar" class="avatar" />
                    </div>

                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" />

                        <label for="eml"><b>Email</b></label>
                        <input type="password" placeholder="Enter Email" name="eml" />

                        <button type="submit">Sign Up</button>
                         
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;
