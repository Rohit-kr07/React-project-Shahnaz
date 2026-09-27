import Rbutton from "./Rbutton";
import { Rbuttonstyle } from "../../../Styles/Rbuttonstyle";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
            <div style={Rbuttonstyle.container}>
      <p>@2025 Webtech Practice.Built for learning and growth.</p>
      <div style={Rbuttonstyle.box1}>
        <Rbutton label="About" />
        <Rbutton label="Services" />
        <Rbutton label="Theme" />
        <Link to="/login">
          <Rbutton label="Login" />
        </Link>
        <Link to="/signup">
          <Rbutton label="SignUp" filled />
        </Link>
      </div>
    </div>
    );
};
export default Footer;