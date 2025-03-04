import { useState, useEffect } from "react";

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        if (!document.cookie.includes("cookieConsent=true")) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        document.cookie = "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365; // 1 year
        setShowBanner(false);
    };

    const handleDecline = () => {
        setShowBanner(false);
    };

    if (!showBanner) return null; // Don't render anything if banner is dismissed

    return (
        <div className="cookieModal">
            <h3 className="text-lg font-semibold text-gray-700">
                Nous respectons votre vie privée 🍪
            </h3>
            <p className="text-sm text-gray-500 py-4">
                Ce site Web utilise des cookies pour améliorer votre expérience.
            </p>
            <div className="flex justify-center gap-4">
                <button onClick={handleAccept} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Accepter
                </button>
                <button onClick={handleDecline} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
                    Refuser
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;