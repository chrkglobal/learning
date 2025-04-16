import React from "react";
import HomePage from "./HomePage";
import Login from "./Login"; // Import Login component

const isLogedin = false;

function Bodycontent() {
    return (
        <div className="app-Bodycontent">
            {isLogedin ? <Login /> : <HomePage />}
            <p>Body Content</p>
        </div>
    );
}

export default Bodycontent;
