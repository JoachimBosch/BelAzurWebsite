import { useContext } from "react";
import MyContext from "../context/context";
import onepager from "../../public/media/img/onepager.png";
import multipage from "../../public/media/img/multipage.png";
import webshop from "../../public/media/img/webshop.png";
import { Link } from "react-router-dom";

const AllServices = () => {
    const { language, text } = useContext(MyContext);

    return (
        <>
            <div className="services serviceIntro" style={{ height: "95%"}}>
                <div className="flex flex-wrap justify-center">
                    <button className="allServicesButton">
                        <Link
                            to="/services/single"
                            onClick={() => {
                                window.scroll(0, 0);
                            }}
                        >
                            <img src={onepager} />
                            <p className="serviceHeader">
                                {text[language].onePage}
                            </p>
                        </Link>
                    </button>
                    <button className="allServicesButton">
                        <Link
                            to="/services/multi"
                            onClick={() => {
                                window.scroll(0, 0);
                            }}
                        >
                            <img src={multipage} />
                            <p className="serviceHeader">
                                {text[language].multiPage}
                            </p>
                        </Link>
                    </button>
                    <button className="allServicesButton">
                        <Link
                            to="/services/ecommerce"
                            onClick={() => {
                                window.scroll(0, 0);
                            }}
                        >
                            <img src={webshop} />
                            <p className="serviceHeader">
                                {text[language].ecommerce}
                            </p>
                        </Link>
                    </button>
                </div>
                <div
                    className="text-center mx-auto my-12"
                    style={{ maxWidth: "1280px" }}
                >
                    <h1 className="text-center pt-8">
                        {text[language].allServicesSubHeader}
                    </h1>
                    <p className="ps-8 pe-8 pb-8">
                        {text[language].allServicesText}
                    </p>
                </div>
            </div>
        </>
    );
};

export default AllServices;
