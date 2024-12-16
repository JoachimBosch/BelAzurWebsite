import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ServiceButton from "../components/serviceButton";
import GetInTouch from "../components/getintouch";
import MailUs from "../components/mailUs";
import { useContext } from "react";
import MyContext from "../context/context";
import onepager from "../../public/media/img/onepager.png";

const Vitrine = () => {
    const { language, _LANGUAGE_ } = useContext(MyContext);

    return (
        <>
            <div className="mx-auto px-4 pt-28">
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">
                        {_LANGUAGE_[language].vitrineHeader}
                    </h1>

                    <p>
                        {_LANGUAGE_[language].vitrineIntro1}
                        <br />
                        {_LANGUAGE_[language].vitrineIntro2}
                        <br />
                        {_LANGUAGE_[language].vitrineIntro3}
                        <br />
                        {_LANGUAGE_[language].vitrineIntro4}
                    </p>
                </div>
                <div
                    className="my-10 mx-10 flex flex-wrap justify-center"
                    style={{ height: "auto" }}
                >
                    <div
                        className="card border flex flex-col place-content-evenly"
                    >
                        <p className="text-justify text-belazurblue">
                            {_LANGUAGE_[language].vitrineBox1}
                        </p>
                    </div>
                    <div
                        className="serviceImage"
                    >
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
                        <h2>{_LANGUAGE_[language].vitrinePerfect}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].vitrinePerfectFor[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].vitrinePerfectFor[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].vitrinePerfectFor[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].vitrinePerfectFor[3]} <br />
                        </div>
                    </div>
                    <div className="border p-4">
                        <h2>{_LANGUAGE_[language].vitrineBenefitsHeader}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].vitrineBenefits[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].vitrineBenefits[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].vitrineBenefits[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].vitrineBenefits[3]}
                            <br />
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center"></div>
                <GetInTouch />
                <ServiceButton />
            </div>
        </>
    );
};

export default Vitrine;
