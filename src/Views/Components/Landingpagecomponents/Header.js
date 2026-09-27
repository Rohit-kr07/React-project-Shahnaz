import Rbutton from "./Rbutton";
import { Rbuttonstyle } from "../../../Styles/Rbuttonstyle";
import { Link } from "react-router-dom";
import { Headerstyle } from "../../../Styles/Headerstyle";

const Header = () => {
  return (
    <div style={Rbuttonstyle.container}>
      <h3  style={Headerstyle.heading}>WebTech Practice</h3>
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

export default Header;
