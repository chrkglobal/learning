import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Bodycontent from "./Bodycontent";


function HomePage(){
    return (
        <>
         <Header/>       
        <Bodycontent />
        <HomePage />
         <Footer />
        </>
    )
}

export default HomePage;