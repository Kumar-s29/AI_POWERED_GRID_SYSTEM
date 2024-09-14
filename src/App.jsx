import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Notifications from "./components/Profile";
import Ecodash from "./components/Ecodash";
import Prediction from "./components/Prediction";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ecodash" element={<Ecodash />} />
        <Route path="/predictions" element={<Prediction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
