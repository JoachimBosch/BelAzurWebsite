import { Link } from "react-router-dom";

const Vitrine = () => {
    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">One-Page websites</h1>

                    <p>
                        Our one-page websites are perfect for getting your
                        business online quickly and effectively. Whether you're
                        a baker looking to showcase your delicious products, an
                        insurance broker wanting to introduce your services, or
                        a building company displaying your latest projects, we
                        create a website that's clear, stylish, and easy for
                        visitors to use.
                    </p>
                </div>
                <div className="mt-10 mx-10 flex justify-center">
                    <div
                        className="border me-8 p-8"
                        style={{ height: "400px", width: "400px" }}
                    >
                        <h1>What’s a One-Page Website?</h1>
                        <p>
                            Think of it as a beautifully designed online
                            brochure. All the important information about your
                            business is on one single page, making it easy for
                            your customers to understand who you are and what
                            you offer without clicking around too much. It's
                            simple, but it packs a punch—delivering your message
                            in a way that grabs attention and encourages action.
                        </p>
                    </div>
                    <div
                        className="border"
                        style={{ height: "400px", width: "400px" }}
                    ></div>
                </div>
                <div className="mt-10 text-center">
                    <h1>Perfect for</h1>
                    <div className="mx-auto">
                        Highlighting one main product or service.
                        <br />
                        Showing off your work or achievements in a simple
                        portfolio. <br />
                        Promoting an event or special offer. <br />
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="text-center">Proceed:</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col text-center">
                            Proceed offline
                            <Link to="/contact">
                                <button>Contact us</button>
                            </Link>
                        </div>
                        <div className="flex flex-col text-center">
                            Proceed online
                            <Link to="/services/vitrine/build/1">
                                <button>Build your site immediately</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Vitrine;
