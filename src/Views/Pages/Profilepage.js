import Headingsection from "../Components/Headingsection";
import Sidebar from "../Components/Sidebar";
import Profilebox from "../Components/Profilepagecomponents/Profilebox";
import { Profilepagestyle } from "../../Styles/Profilepagestyle";

const Profilepage = () => {
    return (
        <div style={Profilepagestyle.maindiv}>

            <Sidebar />
            <div style={Profilepagestyle.seconddiv}>

                <Headingsection />
                <Profilebox />

            </div>
        </div>
    );
};

export default Profilepage;