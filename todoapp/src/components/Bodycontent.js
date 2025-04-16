import React from "react";
import HomePage from "./HomePage";
import Login from "./Login"; // Import Login component

const isLogedin = true;

function Bodycontent() {
    return (
        <div className="app-Bodycontent">
            {/* {isLogedin ? <HomePage /> : <Login /> } */}
            
        </div>
    );
}

export default Bodycontent;
