import { useContext } from "react";
import MyContext from "../context/context";

const AllServices = () => {
    const { page, setPage } = useContext(MyContext);

    return (
        <>
            <h1 className="text-center py-8">
                Click on a service to find out more
            </h1>
            <div className="flex flex-wrap justify-center">
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
            <div className="p-14 text-center mx-auto" style={{ maxWidth: "1000px" }}>
                <p>
                    At Bel'Azur Coding, we are passionate about delivering
                    exceptional web and app development solutions that help your
                    business stand out in the digital landscape. We take a
                    personalized approach to every project, ensuring that the
                    final product aligns perfectly with your goals and vision.
                    From single-page websites to complex e-commerce platforms
                    and cutting-edge mobile apps, we are equipped to bring your
                    ideas to life.
                </p>
            </div>
        </>
    );
};

export default AllServices;
