import { Routes, Route } from "react-router-dom";
import NavBarComponent from "./NavBar";
import LandingPage from "./landingpage/LandingPage";
import IBPage from "./ibenglish/IbenglishPage";

export default function App() {
  return (
    <div>
      {/*hi */}
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ib-english" element= {<IBPage/>}/>
      </Routes>
    </div>
  );
}
