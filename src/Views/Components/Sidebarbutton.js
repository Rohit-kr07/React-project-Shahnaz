import React, { useState } from "react";

const Sidebarbtn = ({ label, style }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            style={{
                ...style,
                backgroundColor: hover ? "#4ECDC4" : "transparent",
                color: hover ? "white" : "black",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {label}
        </div>
    );
};

export default Sidebarbtn;
