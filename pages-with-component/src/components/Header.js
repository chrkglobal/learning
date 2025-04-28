import React from "react";
//  $env:NODE_OPTIONS = "--openssl-legacy-provider"
function conditiontest() {
    let i = 10;

    if (++i === 11 && ++i === 11) {
        console.log("before" + i)
    } else { console.log("sorry"); }
    console.log("after" + i);
}
function arraySwap(q) {
    let z=0;
   z = q[0];
   q[0] = q[1];
   q[1] = z;
   console.log("after", q);
}
function SwapNames(g,h){
   let empty=g;
    g=h;
    h=empty;
    console.log("after--", g,h);
}
function valueChange(a, b) {
    let c;
    c = a;
    a = b;
    b = c;
    console.log("after--", a,b);
}
function Header(SignUp, Login) {
    const a = 10;
    const b = 20;

   

    var x = [2, 1];
    var y=x;
    var p=a;
    console.log("before", x);
    console.log("before--", a,b);
    
    valueChange(a,b);
    console.log("final--", a,b);

    
    arraySwap(x);
    
    console.log("final", x);
    console.log("final-y", y);
    console.log("final-p", p);  
    
    
    let g = "Ramakrishna";
    let h = "Yasoda";
    
    console.log("before--", g,h);

   
    console.log("final--", g,h);
    



    

    valueChange();
    console.log("a", a);
    console.log("b", b);

    console.log("HI",y);
    SwapNames(g,h); 
    arraySwap();
    conditiontest();
    return (
        <div>
            {/* <button style={{ width: '130px', float: 'right', marginRight: '10px' }} onClick={SignUp}>Sign Up</button>
            <button style={{ width: '130px', float: 'right', marginRight: '10px' }} onClick={Login}>Login</button> */}
        </div>
    );
}

export default Header;