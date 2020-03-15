import React from 'react';
import  dummy from "./dummy.png";
function Sidenav(){
    return(
        <div className="col-lg-2  col-sm-6 my-2 side  side ">
                    <img src={dummy} alt="profile" className="pic1 center" />
                    <br/>           
                    <h4>Name</h4> 
                    <h4>Other</h4>    
                </div>
    );
}
export default Sidenav;