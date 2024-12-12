import { useContext } from "react";
import MyContext from "../context/context";

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
                    >
                        <div className="serviceItem">One Page Website</div>
                    </button>
                    <button
                        onClick={() => {
                            setPage("multipager");
                        }}
                    >
                        <div className="serviceItem">Multi Page Website</div>
                    </button>
                    <button
                        onClick={() => {
                            setPage("ecommerce");
                        }}
                    >
                        <div className="serviceItem">E-commerce Website</div>
                    </button>
                    <button
                        onClick={() => {
                            setPage("apps");
                        }}
                    >
                        <div className="serviceItem">App Development</div>
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
