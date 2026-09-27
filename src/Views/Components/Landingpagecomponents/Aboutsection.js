import React from "react";
import { Aboutsectionstyle } from "../../../Styles/Aboutsectionstyle";
import SingleFileBox from "./SingleFileBox";

const Aboutsection = () => {
    return(
      <div style={Aboutsectionstyle.container}>
        <h3 style={Aboutsectionstyle.heading}>About This Project</h3>
        <p style={Aboutsectionstyle.para}>This comprehensive template is designed for students and developers to practice modern web
          fundamentals-responsive layouts, accessible forms, client-side state management, and component
          architecture without any frameworks or complex build processes.</p>
          <SingleFileBox />
            <SingleFileBox />
              <SingleFileBox />
                <SingleFileBox />
                  <SingleFileBox />
                    <SingleFileBox />
      </div>
    );
};
export default Aboutsection;
