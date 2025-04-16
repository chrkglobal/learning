import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Bodycontent from "./Bodycontent";
// https://coreui.io/blog/bootstrap-react-tutorial-with-examples/

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