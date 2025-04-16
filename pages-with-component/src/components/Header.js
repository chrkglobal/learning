import React from "react";



function Header() {
    return (
        <>
            <div className="App-header">
                Header

                <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" 
               >
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Login</button>
                    </li> 
                    <li class="nav-item" role="presentation">
                        <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact Us</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;