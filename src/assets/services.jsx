import { Link } from "react-router-dom";
import Technologies from "../components/technologyBanner";

const Services = () => {
    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
                <div className="mb-8 text-center">
                    <h1>The services we offer:</h1>
                </div>
                <div className="mb-8 text-center">
                    <p>
                        At Bel'Azur Coding, we are passionate about delivering
                        exceptional web and app development solutions that help
                        your business stand out in the digital landscape. We
                        take a personalized approach to every project, ensuring
                        that the final product aligns perfectly with your goals
                        and vision. From single-page websites to complex
                        e-commerce platforms and cutting-edge mobile apps, we
                        are equipped to bring your ideas to life.
                    </p>
                </div>

                <div className="flex flex-row justify-center mx-8">
                    <Link to="/services/vitrine">
                        <div className="serviceItem">
                            <div>Vitrine</div>
                        </div>
                    </Link>
                    <Link to="/services/website">
                        <div className="serviceItem">Website</div>
                    </Link>
                    <Link to="/services/e-commerce">
                        <div className="serviceItem">E-commerce</div>
                    </Link>
                    <Link to="/services/apps">
                        <div className="serviceItem">App development</div>
                    </Link>
                </div>
                <div className="mt-10 text-center">
                    <h1>Technologies we use:</h1>
                    <Technologies />
                </div>
            </div>
        </>
    );
};

export default Services;
