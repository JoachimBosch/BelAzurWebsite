import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { MyProvider } from "./context/context";
import AuthRoutes from "./routes/authroutes";
import "./index.css";
import Navbar from "./structure/navbar";
import Footer from "./structure/footer";
import CookieConsent from "react-cookie-consent";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <MyProvider>
                <Navbar />
                <AuthRoutes />
                <CookieConsent
                    debug={true}
                    location="bottom"
                    buttonText="Accept"
                    declineButtonText="Decline"
                    cookieName="cookieConsent"
                    style={{ background: "#2B373B" }}
                    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                    expires={365}
                >
                    We use cookies to enhance your experience. By accepting, you
                    agree to our cookie policy.
                </CookieConsent>
                <Footer />
            </MyProvider>
        </Router>
    </StrictMode>
);
