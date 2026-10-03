
import { Sidebarbutton } from "../../Styles/Sidebarbuttonstyle";

const Sidebarbtn = ({ label, style, filled }) => {


    return (
        <div>
            <button
                style={{
                    ...Sidebarbutton.btn,
                    ...style,

                    border: `1px solid ${filled ? "#4ECDC4" : "transparent"
                        }`,




                }}

            >
                {label}
            </button>
        </div>
    );
};

export default Sidebarbtn;
