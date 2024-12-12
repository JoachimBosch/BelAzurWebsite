import { useContext, useEffect } from "react";
import MyContext from "../context/context";

const Language = () => {
    const { language, setLanguage } = useContext(MyContext);

    return (
        <>
            <div className="intro px-4 pt-60 pb-20 flex flex-col content-center">
                <h1>
                    {language === "french"
                        ? "Choisissez votre langue"
                        : language === "english"
                        ? "Choose your language"
                        : "Kies uw taal"}
                </h1>

                <button
                    onClick={() => {
                        setLanguage("french");
                    }}
                >
                    French
                </button>
                <button
                    onClick={() => {
                        setLanguage("english");
                        console.log(language);
                    }}
                >
                    English
                </button>
                <button
                    onClick={() => {
                        setLanguage("dutch");
                        console.log(language);
                    }}
                >
                    Dutch
                </button>
            </div>
        </>
    );
};

export default Language;
