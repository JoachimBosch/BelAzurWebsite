import { Link } from "react-router-dom";
import WhyUs from "../components/whyUs";
import Typewriter from "typewriter-effect";
import GetInTouch from "../components/getintouch";
import MailUs from "../components/mailUs";
import { useContext } from "react";
import MyContext from "../context/context";

const Home = () => {
    const { language, text } = useContext(MyContext);

    return (
        <>
            <div
                className="mx-auto
            "
            >
                <div className="intro px-4 flex flex-col content-center">
                    <h1 className="text-center">
                        <Typewriter
                            options={{
                                strings: [
                                    "Bonjour & Bienvenue,",
                                    "Hello & Welcome,",
                                    "Hallo & Welkom,",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <h2 className="text-center">
                        {text[language].introSubHeader1}
                    </h2>
                    <h2 className="text-center">
                        {text[language].introSubHeader2}
                    </h2>
                    <h2 className="text-center mt-4">
                        {text[language].introSubHeader3}
                    </h2>
                </div>
                <div className="text-center">
                    <GetInTouch />
                </div>
                <div>
                    <WhyUs />
                </div>
                <div className="intro px-8">
                    <h1 className="text-center">
                        {text[language].philosophyHeader}
                    </h1>
                    <p className="text-center">
                        {text[language].philosophyText1}
                    </p>
                    <p className="text-center">
                        {text[language].philosophyText2}
                    </p>
                    <br />
                    <h2 className="text-center">
                        {text[language].philosophyClosing}
                    </h2>
                </div>
                <div className="pb-12">
                    <MailUs />
                </div>
            </div>
        </>
    );
};

export default Home;
