import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import StoreSetup from "./StoreSetup";
import Welcome from "./Welcome";

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/StoreSetup" element={<StoreSetup />} />
      </Routes>
    </Router>
  );
}
