import React from "react";
import { Rightboxstyle } from "../../../Styles/Rightboxstyle";

const Rightbox = () => {
  return (
    <div style={Rightboxstyle.container}>

      <button style={Rightboxstyle.button}>
        &lt;
      </button>

      <div style={Rightboxstyle.content}>
        <h3 style={Rightboxstyle.heading}>
          Complete Auth Flow
        </h3>

        <p style={Rightboxstyle.paragraph}>
          Beautiful dark/light mode with smooth transitions,
          persisted across all pages and sessions.
        </p>
      </div>

      <button style={Rightboxstyle.button}>
        &gt;
      </button>

      <div style={Rightboxstyle.dots}>
        <span style={Rightboxstyle.activeDot}></span>
        <span style={Rightboxstyle.dot}></span>
        <span style={Rightboxstyle.dot}></span>
      </div>

    </div>
  );
};

export default Rightbox;
