import { useContext } from "react";
import AllServices from "./allservices";
import MyContext from "../context/context";
import Vitrine from "./vitrine";
import Website from "./website";
import Ecommerce from "./ecommerce";
import AppDevelopment from "./appdevelopment";

const Services = () => {
    const { page, setPage } = useContext(MyContext);

    console.log(page);

    return (
        <>
            <div className="intro mx-auto py-24">
                {page === "allServices" && <AllServices />}
                {page === "onepager" && <Vitrine />}
                {page === "multipager" && <Website />}
                {page === "ecommerce" && <Ecommerce />}
                {page === "apps" && <AppDevelopment />}
            </div>
        </>
    );
};

export default Services;
