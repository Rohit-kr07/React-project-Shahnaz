import { Sidebarbutton } from "../../Styles/Sidebarbuttonstyle";

const sidebarbtn = ({label}) => {
  return (
    <div>
    <button style={Sidebarbutton.btn}>
      
        {label}
    </button>
    </div>
  );
};

export default sidebarbtn;