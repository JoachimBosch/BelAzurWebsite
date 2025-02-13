import { useContext } from "react";
import AllServices from "./allservices";
import MyContext from "../context/context";
import Vitrine from "./vitrine";
import Website from "./website";
import Ecommerce from "./ecommerce";


const Services = () => {
    const { page, setPage } = useContext(MyContext);

    return (
        <>
            <div className="services mx-auto">
                {page === "allServices" && <AllServices />}
                {page === "onepager" && <Vitrine />}
                {page === "multipager" && <Website />}
                {page === "ecommerce" && <Ecommerce />}
            </div>
        </>
    );
};

export default Services;
