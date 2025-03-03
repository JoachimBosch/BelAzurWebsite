import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import MyContext from "../context/context";
import webshop from "../../public/media/img/webshop.png";

const Ecommerce = () => {
    const { language, text } = useContext(MyContext);

    return (
        <>
            <div className="services serviceIntro mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">{text[language].ecommerceHeader}</h1>
                    <h2 className="mb-8">{text[language].ecommercePrice}</h2>
                    <p>
                        {text[language].ecommerceIntro1}
                        <br />
                        {text[language].ecommerceIntro2}
                        <br />
                        {text[language].ecommerceIntro3}
                        <br />
                        {text[language].ecommerceIntro4}
                    </p>
                </div>
                <div
                    className="flex flex-wrap justify-center"
                    style={{ height: "auto" }}
                >
                    <div className="card border flex flex-col place-content-evenly">
                        <p className="text-justify text-belazurblue">
                            {text[language].ecommerceBox1}
                        </p>
                    </div>
                    <div className="serviceImage">
                        <img src={webshop} />
                    </div>
                </div>
                <ServiceContact />
                <div
                    className="perfectBenefits gap-4 mx-auto"
                    style={{ maxWidth: "1240px" }}
                >
                    <div className="border p-4 mb-12">
                        <h2>{text[language].ecommercePerfect}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].ecommercePerfectFor[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].ecommercePerfectFor[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].ecommercePerfectFor[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].ecommercePerfectFor[3]}
                            <br />
                        </div>
                    </div>
                    <div className="border p-4 mb-12">
                        <h2>{text[language].ecommerceBenefitsHeader}</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].ecommerceBenefits[0]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].ecommerceBenefits[1]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].ecommerceBenefits[2]}
                            <br />
                            <FontAwesomeIcon icon={faCheck} />{" "}
                            {text[language].ecommerceBenefits[3]}
                            <br />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Ecommerce;
