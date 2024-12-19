import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ServiceButton from "../components/serviceButton";
import GetInTouch from "../components/getintouch";
import MailUs from "../components/mailUs";
import { useContext } from "react";
import MyContext from "../context/context";
import appdevelopment from "../../public/media/img/appdevelopment.png";

const Website = () => {
    const { language, _LANGUAGE_ } = useContext(MyContext);
    return (
        <>
            <div className="serviceIntro mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">
                        {_LANGUAGE_[language].appDevHeader}
                    </h1>
                    <p>
                        {_LANGUAGE_[language].appDevIntro1}
                        <br />
                        {_LANGUAGE_[language].appDevIntro2}
                        <br />
                        {_LANGUAGE_[language].appDevIntro3}
                        <br />
                        {_LANGUAGE_[language].appDevIntro4}
                    </p>
                </div>
                <div
                    className="flex flex-wrap justify-center"
                    style={{ height: "auto" }}
                >
                    <div className="card border flex flex-col place-content-evenly">
                        <p className="text-justify text-belazurblue">
                            {_LANGUAGE_[language].appDevBox1}
                        </p>
                    </div>
                    <div className="serviceImage">
                        <img src={appdevelopment} alt="app development" />
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
                        <h2>{_LANGUAGE_[language].appDevPerfect}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].appDevPerfectFor[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].appDevPerfectFor[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].appDevPerfectFor[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].appDevPerfectFor[3]}
                            <br />
                        </div>
                    </div>
                    <div className="border p-4">
                        <h2>Benefits</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].appDevBenefits[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].appDevBenefits[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].appDevBenefits[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].appDevBenefits[3]}
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
