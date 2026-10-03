import React from "react";
import { Sidebarstyle } from "../../Styles/Sidebarstyle";
import Sidebarbtn from "./Sidebarbutton";

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

                <Sidebarbtn
                    style={Sidebarstyle.a1}
                    label="Overview"
                    filled={true}
                />

                <Sidebarbtn
                    style={Sidebarstyle.a1}
                    label="Profile settings"
                />

                <Sidebarbtn
                    style={Sidebarstyle.a1}
                    label="Security"
                />

                <Sidebarbtn
                    style={Sidebarstyle.a1}
                    label="Notification"
                />

                <p style={Sidebarstyle.heading}>
                    QUICK ACTION
                </p>

                <Sidebarbtn
                    style={Sidebarstyle.a1}
                    label="Help & Support"
                />
                <p style={Sidebarstyle.acc}>
                    ACCOUNT
                </p>

                <Sidebarbtn
                    style={Sidebarstyle.signout}
                    label="Sign out"
                />

            </div>

        </div>
    );
};

export default Sidebar;
