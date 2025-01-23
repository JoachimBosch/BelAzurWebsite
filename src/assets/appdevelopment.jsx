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
    const { language, text } = useContext(MyContext);
    return (
        <>
            <div className="serviceIntro mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">{text[language].appDevHeader}</h1>
                    <p>
                        {text[language].appDevIntro1}
                        <br />
                        {text[language].appDevIntro2}
                        <br />
                        {text[language].appDevIntro3}
                        <br />
                        {text[language].appDevIntro4}
                    </p>
                </div>
                <div
                    className="flex flex-wrap justify-center"
                    style={{ height: "auto" }}
                >
                    <div className="card border flex flex-col place-content-evenly">
                        <p className="text-justify text-belazurblue">
                            {text[language].appDevBox1}
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
                        <h2>{text[language].appDevPerfect}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].appDevPerfectFor[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].appDevPerfectFor[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].appDevPerfectFor[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].appDevPerfectFor[3]}
                            <br />
                        </div>
                    </div>
                    <div className="border p-4">
                        <h2>Benefits</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].appDevBenefits[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].appDevBenefits[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].appDevBenefits[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].appDevBenefits[3]}
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
