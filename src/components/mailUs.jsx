import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../context/context";

const MailUs = () => {
    const { language, text } = useContext(MyContext);
    return (
        <>
            <div className="text-center">
                <Link to="/contact">
                    <button class="button-home bg-white text-belazurblue hover:bg-belazurblue hover:text-white font-semibold hover:text-white rounded">
                        
                        {text[language].mailUs}
                    </button>
                </Link>
            </div>
        </>
    );
};

export default MailUs;
