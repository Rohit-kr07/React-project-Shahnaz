import Smallbox from "./smallbox";
import { Smallboxstyle } from "../../../Styles/smallboxstyle";
import { Overviewstyle } from "../../../Styles/Overviewstyle";
import { Link } from "react-router-dom";

const Overviewbox = () => {
    return (
        <div style={Overviewstyle.box1}>
            <h3 style={Overviewstyle.heading}>Welcome back,Demo User</h3>
            <p style={Overviewstyle.heading}>Manage your profile settings and account preferences.Your data is securely stored in your browser's localStorage.</p>
            <div style={{ ...Overviewstyle.smallbx1, width: "810px" }}>

                <Smallbox style={Overviewstyle.text} title="Theme" description="Dark/light mode persisted across all pages" line={Smallboxstyle.line} />

                <Smallbox style={Overviewstyle.text} title="Authentication" description="secure session stored in browser storage" line={Smallboxstyle.line} />

                <Smallbox style={Overviewstyle.text} title="Profile" description="20% profile completed (1/5 fields)" line={Smallboxstyle.line} />
                <Smallbox style={Overviewstyle.text} title="Security" description="Password protection and account security" line={Smallboxstyle.line} />
            </div>
            <h4 style={Overviewstyle.heading1}>Quick Actions</h4>
            <div style={Overviewstyle.smallbx2}>

                <Link
                    to="/Profilepage"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                    }}
                >
                    <Smallbox
                        title="Edit Profile"
                        description="Update your profile information."
                    />
                </Link>

                <Smallbox style={Overviewstyle.text} title="Change Password" description="Update your account security." />

            </div>

        </div>
    );
};
export default Overviewbox;