import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import MyContext from "../context/context";
import webshop from "../../public/media/img/webshop.png";
import ServiceContact from "../components/serviceContact";
import ListItem from "../components/listItem";

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
                    className="perfectBenefits gap-28 mx-auto px-4"
                    style={{ maxWidth: "900px" }}
                >
                    <div className="benefits p-4 mb-12 text-left text-belazurblue ">
                        <h2>{text[language].ecommercePerfect}</h2>
                        <div className="ps-8">
                            <div className="w-full">
                                <ul className="space-y-3">
                                    <ListItem
                                        text={
                                            text[language]
                                                .ecommercePerfectFor[0]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language]
                                                .ecommercePerfectFor[1]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language]
                                                .ecommercePerfectFor[2]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language]
                                                .ecommercePerfectFor[3]
                                        }
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="benefits p-4 mb-12 text-left text-belazurblue">
                        <h2>{text[language].ecommerceBenefitsHeader}</h2>
                        <div className="ps-8">
                            <div className="w-full">
                                <ul className="space-y-3">
                                    <ListItem
                                        text={
                                            text[language].ecommerceBenefits[0]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language].ecommerceBenefits[1]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language].ecommerceBenefits[2]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language].ecommerceBenefits[3]
                                        }
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ecommerce;
