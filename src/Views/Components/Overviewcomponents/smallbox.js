import React from  "react";
import { Smallboxstyle } from "../../../Styles/smallboxstyle";

const Smallbox = ({ title, description, line, style }) => {
    return(
         <div style={{ ...Smallboxstyle.smallbx, ...style }}>
             <h5>{title}</h5>
             <p style={Smallboxstyle.para}>{description}</p>
             {line && <div style={line} />}

         </div> 
       
    );
};
export default Smallbox;