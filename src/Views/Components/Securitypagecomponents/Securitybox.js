import { Securityboxstyle } from "../../../Styles/Securityboxstyle";
import Threebox from "./Threebox";

const Securitybox = () => {
    return (
        <div style={Securityboxstyle.mainbox}>
            <div style={Securityboxstyle.box1}>
                <h3 style={Securityboxstyle.heading}>Security Settings</h3>

                <h4 style={Securityboxstyle.text}>
                    <i
                        className="fa-solid fa-shield-halved"
                        style={{ color: "#4ECDC4", marginRight: "8px" }}
                    ></i>
                    Security Settings
                </h4>

                <p style={Securityboxstyle.text}>
                    Keep your account secure by using a strong passwords and changing it regularly.
                </p>

                <div style={Securityboxstyle.box2}>
                    <div>
                        <label style={Securityboxstyle.lbl} htmlFor="Pass">
                            Current password
                        </label>
                        <br />
                        <input
                            style={Securityboxstyle.inpbx}
                            type="text"
                            placeholder="Enter current password"
                            id="Pass"
                        />
                    </div>

                    <div>
                        <label style={Securityboxstyle.lbl} htmlFor="Newpass">
                            Change password
                        </label>
                        <br />
                        <input
                            style={Securityboxstyle.inpbx}
                            type="text"
                            placeholder="Enter new password"
                            id="Newpass"
                        />
                    </div>
                </div>

                <label style={Securityboxstyle.lbl} htmlFor="confirm">
                    Confirm New password
                </label>
                <br />
                <input
                    style={Securityboxstyle.inpbx1}
                    type="text"
                    placeholder="Confirm new password"
                    id="confirm"
                />

                <div style={Securityboxstyle.btn}>
                    <button style={Securityboxstyle.btn2}>Clear</button>
                    <button style={Securityboxstyle.btn3}>Update password</button>
                </div>

                <hr style={{ width: "780px", border: "1px solid #4ECDC4" }} />

                <h4 style={Securityboxstyle.text}>
                    <i
                        className="fa-solid fa-shield-halved"
                        style={{ color: "#4ECDC4", marginRight: "8px" }}
                    ></i>
                    Security Information
                </h4>

                <div style={Securityboxstyle.boxes}>
                    <Threebox
                        heading="Account Created"
                        description="8/31/25"
                    />

                    <Threebox
                        heading="Last Updated"
                        description="Never updated"
                    />

                    <Threebox
                        heading="Session"
                        description="Current browser session active"
                    />
                </div>
            </div>
        </div>
    );
};

export default Securitybox;