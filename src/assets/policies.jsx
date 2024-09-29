import { useState } from "react";
import PrivacyPolicy from "../components/privacyPolicy";
import CookiePolicy from "../components/cookiePolicy";
import TermsAndConditions from "../components/termsAndConditions";

const Policies = () => {
    const [policy, setPolicy] = useState("privacy")

    return (
        <>
        <div className="container mt-28">
            <div className="policy">
                <h1>Which policy do you want to read?</h1>
                <div className="mt-6">
                    <button onClick={(e) => {e.preventDefault(); setPolicy("privacy")}}>Privacy Policy</button>
                    <button onClick={(e) => {e.preventDefault(); setPolicy("cookies")}}>Cookie Policy</button>
                    <button onClick={(e) => {e.preventDefault(); setPolicy("terms")}}>Terms & Conditions</button>
                </div>
            </div>
            <div className="policyText">
                { policy === "privacy" && <PrivacyPolicy />}
                { policy === "cookies" && <CookiePolicy />}
                { policy === "terms" && <TermsAndConditions />}
            </div>
        </div>
        </>

    )
}

export default Policies;