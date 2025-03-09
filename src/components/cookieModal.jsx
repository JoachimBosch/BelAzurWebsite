import { useState, useEffect } from "react";
import { useContext } from "react";
import MyContext from "../context/context";

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    const { language, text } = useContext(MyContext);

    useEffect(() => {
        if (!document.cookie.includes("cookieConsent=true")) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        document.cookie =
            "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365; // 1 year
        setShowBanner(false);
    };

    const handleDecline = () => {
        setShowBanner(false);
    };

    if (!showBanner) return null; // Don't render anything if banner is dismissed

    return (
        <div className="cookieModal">
            <h3 className="text-lg font-semibold text-gray-700">
                {text[language].respectPrivacy} 🍪
            </h3>
            <p className="text-sm text-gray-500 py-4">
                {text[language].cookies}
            </p>
            <div className="flex justify-center gap-4">
                <button
                    onClick={handleAccept}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    {text[language].accept}
                </button>
                <button
                    onClick={handleDecline}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                >
                    {text[language].decline}
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
