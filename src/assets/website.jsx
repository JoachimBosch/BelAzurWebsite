import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ServiceButton from "../components/serviceButton";
import GetInTouch from "../components/getintouch";
import MailUs from "../components/mailUs";
import { useContext } from "react";
import MyContext from "../context/context";
import multipage from "../../public/media/img/multipage.png";

const Website = () => {
    const { language, _LANGUAGE_ } = useContext(MyContext);

    return (
        <>
            <div className="serviceIntro mx-auto px-4">
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
                    className="flex flex-wrap justify-center"
                    style={{ height: "auto" }}
                >
                    
                    <div
                        className="card border flex flex-col place-content-evenly"
                    >
                        <p className="text-justify text-belazurblue">
                            {_LANGUAGE_[language].websiteBox1}
                        </p>
                    </div>
                    <div className="serviceImage">
                        <img src={multipage} />
                    </div>
                </div>
                <div className="text-center">
                    <MailUs />
                </div>
                <div
                    class="perfectBenefits gap-4 mx-auto"
                    style={{ maxWidth: "1240px" }}
                >
                    <div className="border p-4">
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
                    <div className="border p-4">
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
