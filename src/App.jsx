import { Routes, Route } from "react-router-dom";
import LogsComponent from "./Logs";
import NavBarComponent from "./NavBar";
import ProfilePage from "./ProfilePage";
import LandingPage from "./landingpage/landingpage";

export default function App() {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/logs" element={<LogsComponent />} />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}
