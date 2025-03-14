import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { MyProvider } from "./context/context";
import AuthRoutes from "./routes/authroutes";
import "./index.css";
import Navbar from "./structure/navbar";
import Footer from "./structure/footer";
import CookieModal from "./components/cookieModal";
import LanguageModal from "./components/languageModal";

createRoot(document.getElementById("root")).render(
    <Router>
        <MyProvider>
            <Navbar />
            <AuthRoutes />
            <LanguageModal />
            <CookieModal />
            <Footer />
        </MyProvider>
    </Router>
);
