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
    const { language, setLanguage, _LANGUAGE_ } = useContext(MyContext);
    const navigation = [
        { name: _LANGUAGE_[language].navbarItem1, href: "/" },
        { name: _LANGUAGE_[language].navbarItem2, href: "/services" },
        { name: _LANGUAGE_[language].navbarItem3, href: "/about" },
        { name: _LANGUAGE_[language].navbarItem4, href: "/contact" },
    ];

    return (
        <header className="absolute inset-x-0 top-0 z-100 transition-all duration-300 ">
            <nav
                aria-label="Global"
                className="flex justify-between items-center px-8 pt-2"
            >
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Bel'Azur Coding</span>
                        <img src={Azur} alt="logo" className="h-20 w-auto" />
                    </a>
                </div>

                {/* Menu */}
                <div className="flex">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                    >
                        <span className="sr-only">Open main menu</span>
                        <img
                            src={MENU}
                            className="menu"
                            style={{ width: "50px", height: "50px" }}
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
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 navbar-background"
                    /*style={{ backgroundColor: "#f2bb05" }}*/
                >
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon
                                aria-hidden="true"
                                className="h-6 w-6 social-links"
                            />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-black"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="flex justify-evenly pt-4 social-links">
                                <button>
                                    <Link
                                        to="https://www.facebook.com"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faFacebook} />{" "}
                                        Facebook
                                    </Link>
                                </button>
                                <button>
                                    <Link
                                        to="https://www.instagram.com"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />{" "}
                                        Instagram
                                    </Link>
                                </button>
                            </div>
                            <div className="flex justify-evenly pt-4 social-links">
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
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Navbar;
