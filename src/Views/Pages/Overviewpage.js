import Headingsection from "../Components/Headingsection";
import Sidebar from "../Components/Sidebar";
import Overviewbox from "../Components/Overviewcomponents/Overviewbox";
import { Overviewstyle } from "../../Styles/Overviewstyle";

const OverviewPage = () => {
    return (
        <div style={Overviewstyle.maindiv}>

            <Sidebar />
            <div style={Overviewstyle.seconddiv}>

                <Headingsection />
                <Overviewbox />

            </div>
        </div>
    );
};

export default OverviewPage;