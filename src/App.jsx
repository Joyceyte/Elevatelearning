import { Routes, Route } from "react-router-dom";
import LogsComponent from "./Logs";
import NavBarComponent from "./NavBar";
import ProfilePage from "./ProfilePage";
import LandingPage from "./landingpage/LandingPage";
import OurStory from "./ourstorypage/OurStory";
export default function App() {
  return (
    <div>
      {/*hi */}
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/logs" element={<LogsComponent />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/ourstory" element={<OurStory />} />
      </Routes>
    </div>
  );
}
