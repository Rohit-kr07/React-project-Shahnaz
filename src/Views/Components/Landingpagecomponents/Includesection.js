import React from "react";
import { Includesectionstyle } from "../../../Styles/Includesectionstyle";
import Includebox from "./Includebox";

const Includesection = () => {
    return (
        <div style={Includesectionstyle.container}>
            <h3 style={Includesectionstyle.heading}>What's Included</h3>
            <div style={Includesectionstyle.box}>
                <Includebox />
                <Includebox />
                <Includebox />
            </div>
            <div style={Includesectionstyle.box}>
                <Includebox />
                <Includebox />
                <Includebox />
            </div>

        </div>
    );
};

export default Includesection;
