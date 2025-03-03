import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../context/context";

const ServiceContact = () => {
    const { language, text } = useContext(MyContext);
    return (
        <>
            <div className="text-center">
                <Link to="/contact">
                    <button class="button-services bg-white hover:bg-belazurblue hover:text-white text-belazurblue font-semibold py-2 px-4 border-none border-blue-500">
                        {text[language].mailUs}
                    </button>
                </Link>
            </div>
        </>
    );
};

export default ServiceContact;
