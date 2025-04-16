import React from "react";

function Login() {
    return (
        <div className="login-class">
            <h1>Login</h1>
            <form action="action_page.php" method="post">
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <br />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <br />
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" defaultChecked name="remember" /> Remember me
                    </label>
                </div>

                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    );
}

export default Login;
