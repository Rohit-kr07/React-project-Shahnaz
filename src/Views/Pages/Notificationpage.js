import Headingsection from "../Components/Headingsection";
import Sidebar from "../Components/Sidebar";
import Notificationbox from "../Components/Notificationpagecomponents/Notificationbox";
import { Notificationpagestyle } from "../../Styles/Notificationpagestyle";


const Notificationpage = () => {
    return (
        <div style={Notificationpagestyle.maindiv}>

            <Sidebar />
            <div style={Notificationpagestyle.seconddiv}>

                <Headingsection />
                <Notificationbox />

            </div>
        </div>
    );
};

export default Notificationpage;