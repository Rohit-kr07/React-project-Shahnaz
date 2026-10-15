import { Nboxesstyle } from "../../../Styles/Nboxesstyle";

const Nboxes = ({ label, description }) => {
    return (
        <div style={Nboxesstyle.smallbox}>
            <i
                className={
                    label === "Email Notifications"
                        ? "fa-regular fa-envelope"
                        : "fa-solid fa-lock"
                }
                style={Nboxesstyle.icon}
            ></i>

            <h4 style={Nboxesstyle.heading}>{label}</h4>

            <p style={Nboxesstyle.description}>{description}</p>

            <input
                type="checkbox"
                id={label}
                style={Nboxesstyle.checkbx}
            />

            <label htmlFor={label} style={Nboxesstyle.lbl}>
                Enable {label.toLowerCase()}
            </label>
        </div>
    );
};

export default Nboxes;