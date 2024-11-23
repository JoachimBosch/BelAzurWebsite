import { Routes, Route } from "react-router-dom";

import { ProtectedRoute } from "./protectedroute";
import Home from "../assets/home";
import About from "../assets/about";
import Login from "../assets/login";
import Services from "../assets/services";
import Vitrine from "../assets/vitrine";
import Website from "../assets/website";
import Ecommerce from "../assets/ecommerce";
import Signup from "../assets/signup";
import Policies from "../assets/policies";
import Contact from "../assets/contact";
import Portfolio from "../assets/portfolio";
import Profile from "../assets/profile";
import AppDevelopment from "../assets/appdevelopment";

const AuthRoutes = () => {
    /* const { token } = useAuth(); */

    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/vitrine" element={<Vitrine />} />
            <Route path="/services/website" element={<Website />} />
            <Route path="/services/e-commerce" element={<Ecommerce />} />
            <Route path="/services/apps" element={<AppDevelopment />} />
            <Route path="/policy" element={<Policies />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/profile" element={<Profile />} />

            {/* Protected routes */}
            <Route path="/profile" element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};

export default AuthRoutes;
