import { useContext } from "react";
import MyContext from "../context/context";
import onepager from "../../public/media/img/onepager.png";
import multipage from "../../public/media/img/multipage.png";
import webshop from "../../public/media/img/webshop.png";
import appdevelopment from "../../public/media/img/appdevelopment.png";


const AllServices = () => {
    const { page, setPage, language, _LANGUAGE_ } = useContext(MyContext);

    return (
        <>
            <div style={{ height: "95vh"}}>
                <div className="serviceIntro text-center">
                    <h1>{_LANGUAGE_[language].allServicesHeader}</h1>
                </div>
                <div className="flex flex-wrap justify-center">
                    <button
                        onClick={() => {
                            setPage("onepager");
                        }}
                        className="allServicesButton"

                    >
                        <img src={onepager} />
                        <p className="serviceHeader">{_LANGUAGE_[language].onePage}</p>
                    </button>
                    <button
                        onClick={() => {
                            setPage("multipager");
                        }}
                        className="allServicesButton"
                    >
                        <img src={multipage} />
                        <p className="serviceHeader">{_LANGUAGE_[language].multiPage}</p>
                    </button>
                    <button
                        onClick={() => {
                            setPage("ecommerce");
                        }}
                        className="allServicesButton"
                    >
                        <img src={webshop} />
                        <p className="serviceHeader">{_LANGUAGE_[language].ecommerce}</p>
                    </button>
                    <button
                        onClick={() => {
                            setPage("apps");
                        }}

                        className="allServicesButton"
                    >
                        <img src={appdevelopment} />
                        <p className="serviceHeader">{_LANGUAGE_[language].mobileApps}</p>
                    </button>
                </div>
                <div
                    className="text-center mx-auto pb-12"
                    style={{ maxWidth: "1280px" }}
                >
                    <h1 className="text-center pt-8">
                        {_LANGUAGE_[language].allServicesSubHeader}
                    </h1>
                    <p className="ps-8 pe-8 pb-8">
                        {_LANGUAGE_[language].allServicesText}
                    </p>
                </div>
            </div>
        </>
    );
};

export default AllServices;
