import React from "react";
import LandingPage from "./Views/Pages/Landingpage";
import LoginPage from "./Views/Pages/Loginpage";
import SignUpPage from "./Views/Pages/SignUppage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewPage from "./Views/Pages/Overviewpage";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/overviewPage" element={<OverviewPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
