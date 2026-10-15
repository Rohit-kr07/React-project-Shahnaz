import Headingsection from "../Components/Headingsection";
import Sidebar from "../Components/Sidebar";
import Helpbox from "../Components/Helppagecomponents/Helpbox";
import { Helppagestyle } from "../../Styles/Helppagestyle";

const Helppage = () => {
    return (
        <div style={Helppagestyle.maindiv}>

            <Sidebar />
            <div style={Helppagestyle.seconddiv}>

                <Headingsection />
                <Helpbox />

            </div>
        </div>
    );
};

export default Helppage;