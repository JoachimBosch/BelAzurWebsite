import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ServiceButton from "../components/serviceButton";
import GetInTouch from "../components/getintouch";
import MailUs from "../components/mailUs";
import { useContext } from "react";
import MyContext from "../context/context";

const Ecommerce = () => {
    const { language, _LANGUAGE_ } = useContext(MyContext);

    return (
        <>
            <div className="serviceIntro mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">
                        {_LANGUAGE_[language].ecommerceHeader}
                    </h1>

                    <p>
                        {_LANGUAGE_[language].ecommerceIntro1}
                        <br />
                        {_LANGUAGE_[language].ecommerceIntro2}
                        <br />
                        {_LANGUAGE_[language].ecommerceIntro3}
                        <br />
                        {_LANGUAGE_[language].ecommerceIntro4}
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
                            {_LANGUAGE_[language].ecommerceBox1}
                        </p>
                    </div>
                    <div
                        className="serviceImage border"
                    ></div>
                </div>
                <div className="text-center">
                    <MailUs />
                </div>
                <div
                    className="perfectBenefits gap-4 mx-auto"
                    style={{ maxWidth: "1240px" }}
                >
                    <div className="border p-4">
                        <h2>{_LANGUAGE_[language].ecommercePerfect}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].ecommercePerfectFor[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].ecommercePerfectFor[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].ecommercePerfectFor[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].ecommercePerfectFor[3]}
                            <br />
                        </div>
                    </div>
                    <div className="border p-4">
                        <h2>{_LANGUAGE_[language].ecommerceBenefitsHeader}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].ecommerceBenefits[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].ecommerceBenefits[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].ecommerceBenefits[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {_LANGUAGE_[language].ecommerceBenefits[3]}
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

export default Ecommerce;
