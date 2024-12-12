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
            <div className="mx-auto px-4 pt-28">
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
                    className="my-10 mx-10 flex justify-center"
                    style={{ height: "auto" }}
                >
                    <div
                        className="border me-8 p-8 flex flex-col place-content-evenly"
                        style={{
                            width: "400px",
                            backgroundColor: "white",
                        }}
                    >
                        <p className="text-justify text-belazurblue">
                            {_LANGUAGE_[language].ecommerceBox1}
                        </p>
                    </div>
                    <div
                        className="border"
                        style={{ height: "400px", width: "400px" }}
                    ></div>
                </div>
                <div className="text-center">
                    <MailUs />
                </div>
                <div
                    className="grid grid-cols-2 gap-4 mx-auto"
                    style={{ maxWidth: "1240px" }}
                >
                    <div className="border my-12 p-4">
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
                    <div className="border my-12 p-4">
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
