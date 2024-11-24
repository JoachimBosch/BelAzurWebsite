import { Routes, Route } from "react-router-dom";
import Home from "../assets/home";
import About from "../assets/about";
import Services from "../assets/services";
import Vitrine from "../assets/vitrine";
import Website from "../assets/website";
import Ecommerce from "../assets/ecommerce";
import Policies from "../assets/policies";
import Contact from "../assets/contact";
import Portfolio from "../assets/portfolio";
import AppDevelopment from "../assets/appdevelopment";

const AuthRoutes = () => {

    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/vitrine" element={<Vitrine />} />
            <Route path="/services/website" element={<Website />} />
            <Route path="/services/e-commerce" element={<Ecommerce />} />
            <Route path="/services/apps" element={<AppDevelopment />} />
            <Route path="/policy" element={<Policies />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    );
};

export default AuthRoutes;
