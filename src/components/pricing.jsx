import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";

const Pricing = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 mt-8">
                <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Packs based on your needs
                        </h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            All packs are fully customizable based and can be
                            extended with additional options and services.
                        </p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <div
                            className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
                            style={{ width: "380px" }}
                        >
                            <h3 className="mb-4 text-2xl font-semibold">
                                One-Page Website
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                One page, online 24/7. <br />
                                Online in just a few days
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="text-gray-500 dark:text-gray-400 pr-2">
                                    As from
                                </span>
                                <span className="mr-2 text-5xl font-bold">
                                    €849
                                </span>
                            </div>
                            <ul
                                role="list"
                                className="mb-8 space-y-4 text-left flex-grow"
                            >
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>
                                        Perfect for portfolios, events, or small
                                        businesses.
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>Domain name, Hosting, SSL</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>Optimized SEO</span>
                                </li>
                            </ul>
                            <button
                                href="#"
                                className="mt-auto focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                            >
                                Learn more
                            </button>
                            <div className="mt-3">
                                <Link
                                    to="mailto:info@belazurcoding.com?subject=Onepager information request"
                                    className="hover:underline text-sm"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>

                        <div
                            className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
                            style={{ width: "380px" }}
                        >
                            <h3 className="mb-4 text-2xl font-semibold">
                                Multi-Page Website
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Multiple pages for complete online visibility.{" "}
                                <br />
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="text-gray-500 dark:text-gray-400 pr-2">
                                    Starts at
                                </span>
                                <span className="mr-2 text-5xl font-bold">
                                    €1799
                                </span>
                            </div>
                            <ul
                                role="list"
                                className="mb-8 space-y-4 text-left flex-grow"
                            >
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>
                                        Ideal for medium and large businesses
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>Domain name, Hosting, SSL</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>Complete SEO</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>Customized email address</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>
                                        5 pages included, extend unlimitedly
                                    </span>
                                </li>
                            </ul>
                            <button
                                href="#"
                                className="mt-auto focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
                            >
                                Learn more
                            </button>
                            <div className="mt-2">
                                <Link
                                    to="mailto:info@belazurcoding.com?subject=Multi-page information request"
                                    className="hover:underline text-sm"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>

                        <div
                            className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
                            style={{ width: "380px" }}
                        >
                            <h3 className="mb-4 text-2xl font-semibold">
                                E-commerce Website
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Complete online store, fully customizable.
                                Shopify or custom build.
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="text-gray-500 dark:text-gray-400 pr-2">
                                    Starts at
                                </span>
                                <span className="mr-2 text-5xl font-bold">
                                    €2949
                                </span>
                            </div>
                            <ul
                                role="list"
                                className="mb-8 space-y-4 text-left flex-grow"
                            >
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>
                                        Ideal for (aspiring) online businesses
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>Domain name, Hosting, SSL</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>Premium SEO</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>Customized email addresses</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>
                                        10 Pages included, extend unlimitedly
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>Accept payment from anywhere</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <FontAwesomeIcon
                                        icon={faSquareCheck}
                                        style={{ color: "#24e5ab" }}
                                    />
                                    <span>
                                        Grow your business exponentially
                                    </span>
                                </li>
                            </ul>
                            <button
                                href="#"
                                className="mt-auto focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                            >
                                Learn more
                            </button>
                            <div className="mt-2">
                                <Link
                                    to="mailto:info@belazurcoding.com?subject=E-commerce information request"
                                    className="hover:underline text-sm"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center mb-10">
                <h2>
                    Want to get your site up and running as soon as possible?
                </h2>
                <Link to="/services/vitrine/build/1">
                    <p className="my-2">
                        <FontAwesomeIcon icon={faHandPointRight} />{" "}
                        <strong className="hover:underline">
                            Build your One-Page website immediately
                        </strong>
                    </p>
                </Link>
            </div>
        </>
    );
};

export default Pricing;
