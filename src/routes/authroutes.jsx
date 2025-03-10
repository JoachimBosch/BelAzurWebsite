import { Routes, Route } from "react-router-dom";
import Home from "../assets/home";
import About from "../assets/about";
import Contact from "../assets/contact";
import Vitrine from "../assets/vitrine";
import Website from "../assets/website";
import Ecommerce from "../assets/ecommerce";
import AllServices from "../assets/allservices";
import Conditions from "../assets/cgu";
import MentionsLegales from "../assets/mentionsLegales"
import CookiePolicy from "../assets/cookiePolicy";
import PrivacyPolicy from "../assets/privacyPolicy";

const AuthRoutes = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/services/single" element={<Vitrine />} />
            <Route path="/services/multi" element={<Website />} />
            <Route path="/services/ecommerce" element={<Ecommerce />} />
            <Route path="/cgu" element={<Conditions />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/cookiepolicy" element={<CookiePolicy />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
    );
};

export default AuthRoutes;
