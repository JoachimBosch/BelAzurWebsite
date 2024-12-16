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
                <div className="flex flex-wrap justify-center py-8 intro">
                    <button
                        onClick={() => {
                            setPage("onepager");
                        }}
                        className="allServicesButton"

                    >
                        <img src={onepager} />
                        <p>{_LANGUAGE_[language].onePage}</p>
                    </button>
                    <button
                        onClick={() => {
                            setPage("multipager");
                        }}
                        className="allServicesButton"
                    >
                        <img src={multipage} />
                        <p>{_LANGUAGE_[language].multiPage}</p>
                    </button>
                    <button
                        onClick={() => {
                            setPage("ecommerce");
                        }}
                        className="allServicesButton"
                    >
                        <img src={webshop} />
                        <p>{_LANGUAGE_[language].ecommerce}</p>
                    </button>
                    <button
                        onClick={() => {
                            setPage("apps");
                        }}

                        className="allServicesButton"
                    >
                        <img src={appdevelopment} />
                        <p>{_LANGUAGE_[language].mobileApps}</p>
                    </button>
                </div>
                <div
                    className="text-center mx-auto"
                    style={{ maxWidth: "1280px" }}
                >
                    <h1 className="text-center pt-8">
                        {_LANGUAGE_[language].allServicesHeader}
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
