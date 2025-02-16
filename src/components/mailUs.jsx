import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../context/context";

const MailUs = () => {
    const { language, text } = useContext(MyContext);
    return (
        <>
            <div className="text-center">
                <Link to="/contact">
                    <button class="button-home bg-white hover:bg-white text-belazurblue font-semibold hover:text-belazurblue py-2 px-4 border-none border-blue-500 hover:border-transparent rounded">
                        
                        {text[language].mailUs}
                    </button>
                </Link>
            </div>
        </>
    );
};

export default MailUs;
