import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import GetInTouch from "../components/getintouch";
import MailUs from "../components/mailUs";
import { useContext } from "react";
import MyContext from "../context/context";
import onepager from "../../public/media/img/onepager.png";

const Vitrine = () => {
    const { language, text } = useContext(MyContext);

    return (
        <>
            <div className="services serviceIntro mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">{text[language].vitrineHeader}</h1>
                    <h2 className="mb-8">{text[language].vitrinePrice}</h2>
                    <p>
                        {text[language].vitrineIntro1}
                        <br />
                        {text[language].vitrineIntro2}
                        <br />
                        {text[language].vitrineIntro3}
                        <br />
                        {text[language].vitrineIntro4}
                    </p>
                </div>
                <div className="text-center"></div>
                <div
                    className="flex flex-wrap justify-center"
                    style={{ height: "auto" }}
                >
                    <div className="card border flex flex-col place-content-evenly">
                        <p className="text-justify text-belazurblue">
                            {text[language].vitrineBox1}
                        </p>
                    </div>
                    <div className="serviceImage">
                        <img src={onepager} />
                    </div>
                </div>
                <div className="text-center">
                    <MailUs />
                </div>
                <div
                    className="perfectBenefits gap-4 mx-auto"
                    style={{ maxWidth: "1240px" }}
                >
                    <div className="border p-4">
                        <h2>{text[language].vitrinePerfect}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].vitrinePerfectFor[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].vitrinePerfectFor[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].vitrinePerfectFor[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].vitrinePerfectFor[3]} <br />
                        </div>
                    </div>
                    <div className="border p-4">
                        <h2>{text[language].vitrineBenefitsHeader}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].vitrineBenefits[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].vitrineBenefits[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].vitrineBenefits[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].vitrineBenefits[3]}
                            <br />
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center"></div>
                <GetInTouch />
            </div>
        </>
    );
};

export default Vitrine;
