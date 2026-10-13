import Headingsection from "../Components/Headingsection";
import Sidebar from "../Components/Sidebar";
import Securitybox from "../Components/Securitypagecomponents/Securitybox";
import { Securitypagestyle } from "../../Styles/Securitypagestyle";

const Securitypage = () => {
    return (
        <div style={Securitypagestyle.maindiv}>

            <Sidebar />
            <div style={Securitypagestyle.seconddiv}>

                <Headingsection />
                <Securitybox />

            </div>
        </div>
    );
};

export default Securitypage;