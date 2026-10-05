import React from "react";
import LandingPage from "./Views/Pages/Landingpage";
import LoginPage from "./Views/Pages/Loginpage";
import SignUpPage from "./Views/Pages/SignUppage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewPage from "./Views/Pages/Overviewpage";
import Profilepage from "./Views/Pages/Profilepage";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/overviewpage" element={<OverviewPage />} />
        <Route path="/profilepage" element={<Profilepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
