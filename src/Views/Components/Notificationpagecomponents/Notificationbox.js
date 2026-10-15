import { Notificationboxstyle } from "../../../Styles/Notificationboxstyle";
import { Nboxesstyle } from "../../../Styles/Nboxesstyle";
import Nboxes from "./Nboxes";

const Notificationbox = () => {
    return (
        <div style={Notificationboxstyle.mainbox}>
            <div style={Notificationboxstyle.box1}>
                <h3 style={Notificationboxstyle.heading}>
                    Notification
                </h3>

                <h4 style={Notificationboxstyle.text}>
                    <i
                        className="fa-solid fa-bell"
                        style={{ color: "#4ECDC4", marginRight: "8px" }}
                    ></i>
                    Notification Preferences
                </h4>

                <p style={Notificationboxstyle.text}>
                    Manage how and when you receive notifications
                    about your account activity.
                </p>

                <div style={Notificationboxstyle.nboxescontainer}>
                    <Nboxes
                        label="Email Notifications"
                        description="Receive important updates via email."
                    />

                    <Nboxes
                        label="Security Alerts"
                        description="Get notified about security changes."
                    />
                </div>

                <div>
                    <h4 style={Notificationboxstyle.text}>
                        <i
                            className="fa-regular fa-rectangle-list"
                            style={{ color: "#4ECDC4", marginRight: "8px" }}
                        ></i>
                        Recent Activity
                    </h4>

                    <div style={Notificationboxstyle.smallbox}>
                        <input
                            type="checkbox"
                            id="profile-updated"
                            style={Notificationboxstyle.checkbx}
                        />
                        <br />

                        <label
                            style={Notificationboxstyle.profilelabel}
                            htmlFor="profile-updated"
                        >
                            Profile Updated
                        </label>

                        <p style={Notificationboxstyle.para}>
                            Your profile information was successfully updated
                        </p>
                        <p style={Notificationboxstyle.date}>
                            Today
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notificationbox;