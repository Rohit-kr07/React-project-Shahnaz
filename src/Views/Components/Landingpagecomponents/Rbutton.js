import { Rbuttonstyle } from "../../../Styles/Rbuttonstyle";

const Rbutton = ({ label, filled = false, textColor = "white" }) => {
  return (
    <button
      style={{
        ...Rbuttonstyle.btn,
        backgroundColor: filled ? "#4ECDC4" : "transparent",
        color: textColor,
      }}
    >
      {label}
    </button>
  );
};

export default Rbutton;