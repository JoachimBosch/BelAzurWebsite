import { useContext } from "react";
import MyContext from "../context/context";
import onepager from "../../public/media/img/onepager.png";
import multipage from "../../public/media/img/multipage.png";
import webshop from "../../public/media/img/webshop.png";
import appdevelopment from "../../public/media/img/appdevelopment.png";

const AllServices = () => {
    const { page, setPage, language, text } = useContext(MyContext);

    return (
        <>
            <div style={{ height: "95vh" }}>
                <div className="serviceIntro text-center">
                    <h1>{text[language].allServicesHeader}</h1>
                </div>
                <div className="flex flex-wrap justify-center">
                    <button
                        onClick={() => {
                            setPage("onepager");
                        }}
                        className="allServicesButton"
                    >
                        <img src={onepager} />
                        <p className="serviceHeader">
                            {text[language].onePage}
                        </p>
                    </button>
                    <button
                        onClick={() => {
                            setPage("multipager");
                        }}
                        className="allServicesButton"
                    >
                        <img src={multipage} />
                        <p className="serviceHeader">
                            {text[language].multiPage}
                        </p>
                    </button>
                    <button
                        onClick={() => {
                            setPage("ecommerce");
                        }}
                        className="allServicesButton"
                    >
                        <img src={webshop} />
                        <p className="serviceHeader">
                            {text[language].ecommerce}
                        </p>
                    </button>
                </div>
                <div
                    className="text-center mx-auto pb-12"
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
