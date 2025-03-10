import { useState, useEffect, useContext } from "react";
import MyContext from "../context/context";

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [allowAnalytics, setAllowAnalytics] = useState(false);
    const { language, text } = useContext(MyContext);

    useEffect(() => {
        if (!document.cookie.includes("cookieConsent=true")) {
            setShowBanner(true);
        } else {
            
            if (document.cookie.includes("analyticsConsent=true")) {
                loadGoogleAnalytics();
            }
        }
    }, []);

    const loadGoogleAnalytics = () => {
        if (!window.gtag) {
            const script = document.createElement("script");
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=G-C4JFHJNGH4`;
            document.head.appendChild(script);

            script.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    window.dataLayer.push(arguments);
                }
                window.gtag = gtag;
                gtag("js", new Date());
                gtag("config", "G-C4JFHJNGH4", { anonymize_ip: true });
            };
        }
    };

    const handleAccept = () => {
        document.cookie =
            "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365;
        if (allowAnalytics) {
            document.cookie =
                "analyticsConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365;
            loadGoogleAnalytics();
        } else {
            removeGoogleAnalyticsCookies();
        }
        setShowBanner(false);
    };

    const handleDecline = () => {
        removeGoogleAnalyticsCookies();
        setShowBanner(false);
    };

    const removeGoogleAnalyticsCookies = () => {
        document.cookie =
            "_ga=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie =
            "_gid=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie =
            "_gat=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    };

    if (!showBanner) return null;

    return (
        <div className="cookieModal">
            <h3 className="text-lg font-semibold text-gray-700">
                {text[language].respectPrivacy} 🍪
            </h3>
            <p className="text-sm text-gray-500 py-4">
                {text[language].cookies}
            </p>

            <div className="flex items-center justify-between gap-2">
                <label htmlFor="analytics" className="text-sm text-gray-500">
                    {text[language].allowAnalytics}
                </label>
                <input
                    type="checkbox"
                    id="analytics"
                    checked={allowAnalytics}
                    onChange={() => setAllowAnalytics(!allowAnalytics)}
                    className="w-4 h-4"
                />
            </div>

            <div className="flex justify-center gap-4 mt-4">
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
