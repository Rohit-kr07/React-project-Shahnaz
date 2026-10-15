import { Threeboxstyle } from "../../../Styles/Threeboxstyle";

const Threebox = ({ heading, description }) => {
    return (
        <div style={Threeboxstyle.container}>
            <i
                className="fa-regular fa-calendar-days"
                style={Threeboxstyle.icon}
            ></i>

            <h5 style={Threeboxstyle.heading}>{heading}</h5>

            <p style={Threeboxstyle.description}>{description}</p>
        </div>
    );
};

export default Threebox;