import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ServiceButton from "../components/serviceButton";
import GetInTouch from "../components/getintouch";
import MailUs from "../components/mailUs";
import { useContext } from "react";
import MyContext from "../context/context";

const Website = () => {
    const { language, _LANGUAGE_ } = useContext(MyContext);

    return (
        <>
            <div className="mx-auto px-4 pt-28">
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">
                        {_LANGUAGE_[language].websiteHeader}
                    </h1>

                    <p>
                        {_LANGUAGE_[language].websiteIntro1}
                        <br />
                        {_LANGUAGE_[language].websiteIntro2}
                        <br />
                        {_LANGUAGE_[language].websiteIntro3}
                    </p>
                </div>
                <div
                    className="mt-10 mx-10 flex justify-center"
                    style={{ height: "auto" }}
                >
                    <div className="border " style={{ width: "400px" }}></div>
                    <div
                        className="border ms-8 p-8 flex flex-col place-content-evenly"
                        style={{ width: "400px", backgroundColor: "white" }}
                    >
                        <p className="text-justify text-belazurblue">
                            {_LANGUAGE_[language].websiteBox1}
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <MailUs />
                </div>
                <div
                    class="grid grid-cols-2 gap-4 mx-auto"
                    style={{ maxWidth: "1240px" }}
                >
                    <div className="border my-12 p-4">
                        <h2>{_LANGUAGE_[language].websitePerfect}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].websitePerfectFor[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].websitePerfectFor[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].websitePerfectFor[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].websitePerfectFor[3]} <br />
                        </div>
                    </div>
                    <div className="border my-12 p-4">
                        <h2>{_LANGUAGE_[language].websiteBenefitsHeader}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].websiteBenefits[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].websiteBenefits[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].websiteBenefits[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].websiteBenefits[3]}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch />
            <ServiceButton />
        </>
    );
};

export default Website;
