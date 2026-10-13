import React from "react";
import { Sidebarstyle } from "../../Styles/Sidebarstyle";
import Sidebarbtn from "./Sidebarbutton";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div style={Sidebarstyle.box}>
            <div>
                <div style={Sidebarstyle.smalldiv}>
                    <div style={Sidebarstyle.smalldiv1}>
                        <h4 style={{ margin: "0px" }}>
                            DU
                        </h4>
                    </div>

                    <div style={Sidebarstyle.para}>
                        <p style={Sidebarstyle.demo}>
                            Demo User
                        </p>

                        <p style={Sidebarstyle.gmail}>
                            demouser@gmail.com
                        </p>
                    </div>
                </div>

                <hr style={Sidebarstyle.line} />

                <p style={Sidebarstyle.heading}>
                    DASHBOARD
                </p>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}
                >
                    <Link to="/overviewpage" style={{ textDecoration: "none" }}>
                        <Sidebarbtn
                            style={Sidebarstyle.a1}
                            label="Overview"
                        />
                    </Link>

                    <Link to="/profilepage" style={{ textDecoration: "none" }}>
                        <Sidebarbtn
                            style={Sidebarstyle.a1}
                            label="Profile settings"
                        />
                    </Link>

                    <Link to="/Securitypage" style={{ textDecoration: "none" }}>
                        <Sidebarbtn
                            style={Sidebarstyle.a1}
                            label="Security"
                        />
                    </Link>

                    <Link to="/Notificationpage" style={{ textDecoration: "none" }}>
                        <Sidebarbtn
                            style={Sidebarstyle.a1}
                            label="Notification"
                        />
                    </Link>
                </div>

                <p style={Sidebarstyle.heading}>
                    QUICK ACTION
                </p>

                <Link to="/Helppage" style={{ textDecoration: "none" }}>
                    <Sidebarbtn
                        style={Sidebarstyle.a1}
                        label="Help & Support"
                    />
                </Link>

                <p style={Sidebarstyle.acc}>
                    ACCOUNT
                </p>

                <Link to="/login" style={{ textDecoration: "none" }}>
                    <Sidebarbtn
                        style={{
                            ...Sidebarstyle.a1,
                            ...Sidebarstyle.signout
                        }}
                        label="Sign out"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;