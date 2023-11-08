import React from "react";

function Nav(props){
    
    return(
        <>
            <nav style={AppNav} className="main-nav">
                <ul>
                    <li style={{color:props.color}}>Home</li>
                    <li>About  { 4< 5}</li>
                    <li>Shop . {4/2}</li>
                    <li>{7*2}</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;
