import { Boxesstyle } from "../../../Styles/Boxesstyle";
const Boxes = ({ heading, description }) => {
    return(
        <div style={Boxesstyle.container}>
    <h5 style={Boxesstyle.heading}>{heading}</h5>
        <p style={Boxesstyle.description}>{description}</p>
        </div>  
    );
};
export default Boxes;