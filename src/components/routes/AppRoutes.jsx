import ForgotPassword from "../pages/ForgotPassword";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import AboutUs from "../pages/AboutUs";
import Prayers from "../pages/Prayers";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
<Route path="/about" element={<AboutUs />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/prayers" element={<Prayers />} />
    <Route path="/events" element={<Events />} />
    
    <Route path="/contact" element={<Contact />} /></Routes>
  );
}
