import { useContext } from "react";
import MyContext from "../context/context";
import Onepager from "../../public/media/img/website developing.png";
import Website from "../../public/media/img/webdeveloping 2.png";
import Ecommerce from "../../public/media/img/Key.png";
import Apps from "../../public/media/img/webdeveloping 3.png";

const AllServices = () => {
    const { page, setPage, language, _LANGUAGE_ } = useContext(MyContext);

    return (
        <>
            <div style={{ height: "90vh" }}>
                <div className="flex flex-wrap justify-center py-8 mt-32">
                    <button
                        onClick={() => {
                            setPage("onepager");
                        }}
                        style={{ width: "300px", height: "350px" }}
                    >
                        <img src={Onepager} />
                        <p>One Page Website</p>
                    </button>
                    <button
                        onClick={() => {
                            setPage("multipager");
                        }}
                        style={{ width: "300px", height: "350px" }}
                    >
                        <img src={Website} />
                        <p>Multi Page Website</p>
                    </button>
                    <button
                        onClick={() => {
                            setPage("ecommerce");
                        }}
                        style={{ width: "300px", height: "350px" }}
                    >
                        <img src={Ecommerce} />
                        <p>E-commerce Website</p>
                    </button>
                    <button
                        onClick={() => {
                            setPage("apps");
                        }}

                        style={{ width: "300px", height: "350px" }}
                    >
                        <img src={Apps} />
                        <p>Mobile apps</p>
                    </button>
                </div>
                <div
                    className="text-center mx-auto"
                    style={{ maxWidth: "1280px" }}
                >
                    <h1 className="text-center pt-8">
                        {_LANGUAGE_[language].allServicesHeader}
                    </h1>
                    <p className="p-14">
                        {_LANGUAGE_[language].allServicesText}
                    </p>
                </div>
            </div>
        </>
    );
};

export default AllServices;
