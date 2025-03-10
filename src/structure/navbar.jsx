import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import Azur from "../../public/media/img/Azur.png";
import fr from "../../public/media/img/fr.png";
import en from "../../public/media/img/en.png";
import nl from "../../public/media/img/nl.png";
import MENU from "../../public/media/img/ME NU.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import MyContext from "../context/context";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, setLanguage, text, logoWidth, logoHeight } =
        useContext(MyContext);
    const navigation = [
        { name: text[language].navbarItem1, href: "/" },
        { name: text[language].navbarItem2, href: "/services" },
        { name: text[language].navbarItem3, href: "/about" },
        { name: text[language].navbarItem4, href: "/contact" },
    ];

    return (
        <header className="inset-x-0 top-0 z-100 transition-all duration-300 navbar">
            <nav
                aria-label="Global"
                className="flex justify-between items-center px-8 pt-2"
            >
                {/* Logo */}
                <div className="logo flex items-center">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Bel'Azur Coding</span>
                        <img
                            src={Azur}
                            alt="Bel'Azur Coding Logo"
                            className="h-24 w-auto"
                        />
                    </a>
                </div>

                {/* Menu */}
                <div className="flex">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="menu -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                    >
                        <img
                            src={MENU}
                            alt="Bel'Azur Coding MENU image"
                            className="menu m-2"
                            style={{
                                width: `${logoWidth}`,
                                height: `${logoHeight}`,
                            }}
                        />
                    </button>
                </div>
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className=""
            >
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 navbar-background h-full flex flex-col">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md pt-4 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon
                                aria-hidden="true"
                                className="icon h-6 w-6 social-links"
                            />
                        </button>
                    </div>
                    <div className="mt-6 flex-grow flex flex-col">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-belazurpink"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="mt-auto pb-6">
                            <div>
                                <div className="pt-8">
                                    <p className="-mx-3 block text-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                                        {text[language].navbarLanguage}
                                    </p>
                                </div>
                                <div className="flex justify-evenly pt-4 language-links">
                                    <button
                                        onClick={() => {
                                            setLanguage("french");
                                        }}
                                    >
                                        <img
                                            src={fr}
                                            alt="Français"
                                            title="Français"
                                            style={{ height: "30px" }}
                                        />
                                    </button>
                                    <button
                                        onClick={() => {
                                            setLanguage("english");
                                        }}
                                    >
                                        <img
                                            src={en}
                                            alt="English"
                                            title="English"
                                            style={{ height: "30px" }}
                                        />
                                    </button>
                                    <button
                                        onClick={() => {
                                            setLanguage("dutch");
                                        }}
                                    >
                                        <img
                                            src={nl}
                                            alt="Nederlands"
                                            title="Nederlands"
                                            style={{ height: "30px" }}
                                        />
                                    </button>
                                </div>
                                <div className="flex justify-evenly pt-4 social-links pb-0">
                                    <button className="hover:text-belazurpink">
                                        <Link
                                            to="https://www.facebook.com/belazurcoding"
                                            target="_blank"
                                        >
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                            />{" "}
                                            {text[language].followUs} Facebook
                                        </Link>
                                    </button>
                                    <button className="hover:text-belazurpink pt-0">
                                        <Link
                                            to="https://www.instagram.com/belazurcoding/"
                                            target="_blank"
                                        >
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                            />{" "}
                                            {text[language].followUs} Instagram
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Navbar;
