import React from "react";
import LoginContent from "./LoginContent";

function Login() {
    return (
        <div style={{ display: 'flex' }}>
            <LoginContent />
            <div className="login-class">
                <h1>Login</h1>
                <form action="">
                    <div className="imgcontainer">
                        <img src="../../avatar.png" alt="Avatar" class="avatar" />
                    </div>

                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" />

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>

                        <div class="container" style={{ backgroundColor: '#f1f1f1' }}>
                            <span className="psw"> Forgot Password?</span>
                            <button type="button" className="cancelbtn">Cancel</button>


                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;
