import React from "react";
// import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";
import SignUp from "./SignUp";
import Login from "./Login";






function Bodycontent() {
    

        
const [isSignup, setIsSignup] = React.useState(false)


const onSignClick = () => setIsSignup(true)
const onLoginClick = () => setIsSignup(false)
return(
    <div className="app-Bodycontent">
    <input type="submit" onClick={onSignClick} value ="SignUp"/>
    <button style={{ width: '130px', float: 'right', marginRight: '10px' }} onClick={onLoginClick}>Login</button>
    {isSignup ? <SignUp /> : <Login /> }
            <Header />

            <Footer />

        </div>
        );
}

export default Bodycontent;
