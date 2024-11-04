import { Routes, Route } from "react-router-dom";

import { ProtectedRoute } from "./protectedroute";
import Home from "../assets/home";
import Language from "../assets/language";
import About from "../assets/about";
import Login from "../assets/login";
import Services from "../assets/services";
import Vitrine from "../assets/vitrine";
import Website from "../assets/website";
import Ecommerce from "../assets/ecommerce";
import Signup from "../assets/signup";
import VitrineCheckout from "../assets/vitrinecheckout";
import Policies from "../assets/policies";
import Contact from "../assets/contact";
import Portfolio from "../assets/portfolio";
import Profile from "../assets/profile";
import AppDevelopment from "../assets/appdevelopment";
import VitrineBuild from "../assets/vitrinebuild";
import VitrinePage1 from "../components/vitrinepage1";
import VitrinePage2 from "../components/vitrinepage2";
import VitrinePage3 from "../components/vitrinepage3";
import VitrinePage4 from "../components/vitrinepage4";
import VitrinePage5 from "../components/vitrinepage5";

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
            <Route path="/services/vitrine/build" element={<VitrineBuild />} />
            <Route
                path="/services/vitrine/build/1"
                element={<VitrinePage1 />}
            />
            <Route
                path="/services/vitrine/build/2"
                element={<VitrinePage2 />}
            />
            <Route
                path="/services/vitrine/build/3"
                element={<VitrinePage3 />}
            />
            <Route
                path="/services/vitrine/build/4"
                element={<VitrinePage4 />}
            />
            <Route
                path="/services/vitrine/build/5"
                element={<VitrinePage5 />}
            />
            <Route
                path="/services/vitrine/checkout"
                element={<VitrineCheckout />}
            />
            <Route path="/services/website" element={<Website />} />
            <Route path="/services/e-commerce" element={<Ecommerce />} />
            <Route path="/services/apps" element={<AppDevelopment />} />
            <Route path="/policy" element={<Policies />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/profile" element={<Profile />} />

            {/* Protected routes */}
            {/* <Route path="/profile" element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route> */}
        </Routes>
    );
};

export default AuthRoutes;
