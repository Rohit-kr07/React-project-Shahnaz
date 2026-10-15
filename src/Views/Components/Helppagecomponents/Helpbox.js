import { Helpboxstyle } from "../../../Styles/Helpboxstyle";

import Boxes from "./Boxes";

const Helpbox = () => {
    return (
        <div style={Helpboxstyle.box1}>
            <h3 style={Helpboxstyle.heading}>Help & Support</h3>
            <p>
                <i
                    id="file"
                    className="fa-solid fa-circle-question"
                    style={Helpboxstyle.icon}
                ></i>
                &nbsp;
                Frequently Asked Questions
            </p>
            <div>
                <Boxes heading="How do I update my profile?" description="Click on 'Profile settings' in the sidebar to edit your personal information,address and other details." />
                <Boxes heading="Is my data secure?" description="This is a demo application that stores data in your browser LocalStorage.In a production app,data would be encrypted and stored securely on servers." />
                <Boxes heading="How do I change my password?" description="Go to 'security' in your sidebar,enter your current password ,then set and confirm your new password." />
            </div>
            <h4>
                <i className="fa-solid fa-phone" style={Helpboxstyle.icon}></i>
                &nbsp;&nbsp;Contact Support
            </h4>
            <p style={Helpboxstyle.description}>
                This is a demonstration application for learning web development.in a real
                application,you would find contact information and support options here.
            </p>
        </div>
    );
};

export default Helpbox;
