import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../context/context";

const About = () => {
    const { language, _LANGUAGE_ } = useContext(MyContext);

    return (
        <>
            <div className="intro mx-auto pt-16 px-4 md:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-4xl font-bold">
                    {_LANGUAGE_[language].aboutUsHeader}
                    </h1>
                </div>
                <div className="py-0 md:py-8 mx-auto max-w-7xl">
                    <h1 className="text-center text-2xl md:text-4xl font-bold">
                        Lisa Lowagie
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="flex justify-center">
                            <Link
                                to="https://github.com/lisalowagie"
                                target="_blank"
                            >
                                <img
                                    className="aboutProfilePic m-auto"
                                    src="/media/img/lisa.jpeg"
                                    alt="Lisa Lowagie"
                                ></img>
                            </Link>
                        </div>
                        <div className="flex md:text-left mt-4 mb-4 aboutUs border-none md:border-2">
                            <p className="text-justify sm:text-lg">
                                {_LANGUAGE_[language].aboutLisa}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-8 mx-auto max-w-7xl mb-10">
                    <h1 className="text-center mb-6">Joachim Bosch</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div>
                            <Link
                                to="https://github.com/joachimBosch/"
                                target="_blank"
                            >
                                <img
                                    className="aboutProfilePic m-auto"
                                    src="/media/img/joachim.jpeg"
                                    alt="Joachim Bosch"
                                ></img>
                            </Link>
                        </div>
                        <div className="flex md:text-left mt-4 mb-4 aboutUs border-none md:border-2">
                            <p className="text-justify sm:text-lg">
                                {_LANGUAGE_[language].aboutJoachim}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
