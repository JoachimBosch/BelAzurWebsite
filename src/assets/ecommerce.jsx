import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Ecommerce = () => {
    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">E-commerce websites</h1>

                    <p>
                        Our e-commerce websites are designed to help you start
                        selling online easily and effectively. Whether you’re a
                        local artisan launching your first online shop or a
                        retail business ready to go global, we build a secure,
                        beautiful site that makes shopping easy for your
                        customers and managing orders a breeze for you.
                    </p>
                </div>
                <div className="mt-10 mx-10 flex justify-center">
                    <div
                        className="border me-8 p-8 flex flex-col place-content-evenly"
                        style={{ height: "400px", width: "400px" }}
                    >
                        <h1>What's a E-Commerce Website?</h1>
                        <p>
                            It's your complete online store where you can sell
                            your own products or services. We can set it up
                            using Shopify for a simple, ready-made solution or
                            custom-build it for more control and flexibility.
                            From displaying your products in an attractive
                            layout to offering multiple payment options, we make
                            sure your store is easy to use and optimized for
                            sales.
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
                        <FontAwesomeIcon icon={faCheck} /> Small businesses
                        launching their first online store
                        <br />
                        <FontAwesomeIcon icon={faCheck} /> Retailers looking to
                        expand their reach and sell more products
                        <br />
                        <FontAwesomeIcon icon={faCheck} /> Businesses that need
                        a tailored e-commerce experience <br />
                        <FontAwesomeIcon icon={faCheck} /> Shops wanting to
                        offer easy, secure payment options<br />
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="text-center">Proceed:</h1>
                    <div className="">
                        <div className="flex flex-col text-center">
                            Proceed offline
                            <Link to="/contact">
                                <button>Contact us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ecommerce;
