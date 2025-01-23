import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../context/context";

const WhyUs = () => {
    const { language, text } = useContext(MyContext);
    return (
        <>
            <div className="whyUs py-8 gap-8 d-block text-belazurblue">
                <div
                    className="mx-auto lg:columns-2 columns-1 mx-4"
                    style={{ maxWidth: "1280px" }}
                >
                    <div className="p-4">
                        <h1 className="py-10">{text[language].whyUsHeader1}</h1>
                        <p className="text-justify">
                            {text[language].whyUsText1}
                        </p>
                    </div>
                    <div className="p-4">
                        <h1 className="py-10">{text[language].whyUsHeader2}</h1>
                        <p className="text-justify">
                            {text[language].whyUsText2}
                        </p>
                    </div>
                </div>
                <div
                    className="mx-auto lg:columns-2 columns-1 mx-4 pb-10"
                    style={{ maxWidth: "1280px" }}
                >
                    <div className="p-4">
                        <h1 className="py-10">{text[language].whyUsHeader3}</h1>
                        <p className="text-justify">
                            {text[language].whyUsText3}
                        </p>
                    </div>
                    <div className="p-4">
                        <h1 className="py-10">{text[language].whyUsHeader4}</h1>
                        <p className="text-justify">
                            {text[language].whyUsText4}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyUs;
