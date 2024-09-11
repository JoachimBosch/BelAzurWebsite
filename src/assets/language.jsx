import { Link } from "react-router-dom";
import MyContext from "../context/context";
import { useContext, useState } from "react";

const Language = () => {
    const { language, setLanguage } = useContext(MyContext);


    return (
        <>
            <div className="bg-[#eeeee0] rounded flex flex-col justify-center md:flex-row mt-24">
                <div className="py-auto px-auto md:px-10 md:w-[60%] flex flex-col items-center items-stretch">
                    <Link>
                        <button onClick={() => {setLanguage("English")}}>English</button>
                    </Link>
                    <Link>
                        <button onClick={() => {setLanguage("French")}}>Français</button>
                    </Link>
                    
                </div>
            </div>
        </>
    )
};

export default Language;