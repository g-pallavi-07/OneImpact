import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import HomePage from './pages/HomePage.jsx'
import Mission from './pages/Mission.jsx'
import AIMissionOrganizer from './pages/AIMissionOrganizer.jsx'
import NGODirectory from "./pages/NGODirectory";
export default function App() {
  return (
    <div className="min-h-screen bg-cream  ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/missions" element={<Mission />} />
        <Route
          path="/ai-organizer"
          element={<AIMissionOrganizer />}
        />
        <Route
          path="/ngos"
          element={<NGODirectory />}
        />
      </Routes>
    </div>
  )
}
