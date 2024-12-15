import { Routes, Route } from "react-router-dom";
import Home from "../assets/home";
import About from "../assets/about";
import Services from "../assets/services";
import Policies from "../assets/policies";
import Contact from "../assets/contact";

const AuthRoutes = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/policy" element={<Policies />} />
        </Routes>
    );
};

export default AuthRoutes;
