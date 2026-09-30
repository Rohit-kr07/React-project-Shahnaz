import React from "react";
import { Sidebarstyle } from "../../Styles/Sidebarstyle";

const sidebar = () => {
    return (
        <div style={Sidebarstyle.box}>
            <div>
            <div style={Sidebarstyle.smalldiv}>
                <div style={Sidebarstyle.smalldiv1}>
                <h4 style={{margin: "0px"}}>DU</h4>
                </div>
                <div style={{display:"flxe",flexDirection:"column"}}>
                    <p> Demo User</p>
                    <p>demouser@gmail.com</p>
                </div>
            </div>
   
       <sidebarbtn label = "abcd"/>
       </div>
        </div>
    );
};
export default sidebar;