import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import GetInTouch from "../components/getintouch";
import MailUs from "../components/mailUs";
import { useContext } from "react";
import MyContext from "../context/context";
import multipage from "../../public/media/img/multipage.png";

const Website = () => {
    const { language, text } = useContext(MyContext);

    return (
        <>
            <div className="services serviceIntro mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">{text[language].websiteHeader}</h1>
                    <h2 className="mb-8">{text[language].websitePrice}</h2>
                    <p>
                        {text[language].websiteIntro1}
                        <br />
                        {text[language].websiteIntro2}
                        <br />
                        {text[language].websiteIntro3}
                    </p>
                </div>
                <div
                    className="flex flex-wrap justify-center"
                    style={{ height: "auto" }}
                >
                    <div className="card border flex flex-col place-content-evenly">
                        <p className="text-justify text-belazurblue">
                            {text[language].websiteBox1}
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
                        <h2>{text[language].websitePerfect}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].websitePerfectFor[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].websitePerfectFor[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].websitePerfectFor[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].websitePerfectFor[3]} <br />
                        </div>
                    </div>
                    <div className="border p-4">
                        <h2>{text[language].websiteBenefitsHeader}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].websiteBenefits[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].websiteBenefits[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].websiteBenefits[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].websiteBenefits[3]}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch />
        </>
    );
};

export default Website;
