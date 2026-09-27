import Header from "../Components/Landingpagecomponents/Header";
import Leftbox from "../Components/Landingpagecomponents/Leftbox";
import Rightbox from "../Components/Landingpagecomponents/Rightbox";

import { Landingpagestyle } from "../../Styles/Landingpagestyle";
import Aboutsection from "../Components/Landingpagecomponents/Aboutsection";
import Includesection from "../Components/Landingpagecomponents/Includesection";
import Footer from "../Components/Landingpagecomponents/Footer";

const LandingPage = () => {
  return (
    <div style={Landingpagestyle.page}>
      
      <Header />

      <div style={Landingpagestyle.mainContent}>

    
          <Leftbox />
          <Rightbox />
     

      </div>
  
        <Aboutsection />
        <Includesection />
        <Footer/>

    </div>
  );
};

export default LandingPage;
