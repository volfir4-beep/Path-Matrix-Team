import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import RideShare from "./pages/RideShare";
import Sightseeing from "./pages/Sightseeing";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<RideShare />} />
        <Route path="/sightseeing" element={<Sightseeing />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;