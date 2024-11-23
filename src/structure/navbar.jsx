import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import Azur from "../../public/media/img/Azur.png";
import MyContext from "../context/context";
import MENU from "../../public/media/img/ME NU.png";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Profile", href: "/profile" } /* Delete after */,
];

const servicesDropdown = [
    { name: "All Services", href: "/services" },
    { name: "One-pager", href: "/services/vitrine" },
    { name: "Multi-pager", href: "/services/website" },
    { name: "E-commerce", href: "/services/e-commerce" },
    { name: "App Development", href: "/services/apps" },
];

const profileDropdown = [
    { name: "Sign Up", href: "/signup" },
    { name: "Login", href: "/login" },
];

const Navbar = () => {
    const { token, logout } = useContext(MyContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

    const hideTimeout = useRef(null);

    const handleMouseEnter = (setDropdown, closeOtherDropdown) => {
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
        }
        setDropdown(true);
        closeOtherDropdown(false);
        setIsNavbarExpanded(true);
    };

    const handleMouseLeave = (setDropdown) => {
        hideTimeout.current = setTimeout(() => {
            setDropdown(false);
            setIsNavbarExpanded(false);
        }, 1000);
    };

    return (
        <header
            className={`absolute inset-x-0 top-0 z-100 bg-white transition-all duration-300 ${
                isNavbarExpanded ? "h-36" : "h-24"
            }`} style={{ backgroundColor: "#f2bb05"}}
        >
            <nav
                aria-label="Global"
                className="flex justify-between items-center px-8 pt-2 pb-3"
            >
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Bel'Azur Coding</span>
                        <img src={Azur} alt="logo" className="h-20 w-auto" />
                    </a>
                </div>

                {/* Navigation Links */}
                {/* <div className="hidden lg:flex items-center gap-x-12">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={
                                item.name === "Services"
                                    ? () =>
                                          handleMouseEnter(
                                              setIsServicesOpen,
                                              setIsProfileOpen
                                          )
                                    : item.name === "Profile"
                                    ? () =>
                                          handleMouseEnter(
                                              setIsProfileOpen,
                                              setIsServicesOpen
                                          )
                                    : null
                            }
                            onMouseLeave={
                                item.name === "Services"
                                    ? () => handleMouseLeave(setIsServicesOpen)
                                    : item.name === "Profile"
                                    ? () => handleMouseLeave(setIsProfileOpen)
                                    : null
                            }
                        >
                            <a
                                href={item.href}
                                className="text-xl font-semibold leading-6 text-gray-800 hover:underline"
                            >
                                {item.name}
                            </a>
                            {item.name === "Services" && isServicesOpen && (
                                <div
                                    className="absolute top-full mt-2 z-10 flex font-semibold justify-center left-1/2 transform -translate-x-1/2"
                                    style={{ width: "800px" }}
                                >
                                    {servicesDropdown.map((service) => (
                                        <a
                                            key={service.name}
                                            href={service.href}
                                            className="block px-4 py-2 text-md text-black hover:underline"
                                        >
                                            {service.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                            {item.name === "Profile" && isProfileOpen && (
                                <div
                                    className="absolute top-full mt-2 z-10 flex font-semibold justify-center left-1/2 transform -translate-x-1/2"
                                    style={{ width: "600px" }}
                                >
                                    {!token ? (
                                        profileDropdown.map((profileItem) => (
                                            <a
                                                key={profileItem.name}
                                                href={profileItem.href}
                                                className="block px-4 py-2 text-md text-black hover:underline"
                                            >
                                                {profileItem.name}
                                            </a>
                                        ))
                                    ) : (
                                        <Link to="/">
                                            <button
                                                
                                                onClick={logout}
                                                className="block px-4 py-2 text-md text-black hover:underline hover:bg-none"
                                            >
                                                Logout
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div> */}

                {/* Language */}
                <div className="flex items-center hidden lg:flex">
                    <img src={MENU} style={{ width: "50px", height: "50px" }} />
                </div>

                {/* Mobile Menu */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-12 w-12" />
                    </button>
                </div>
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Bel'Azur Coding</span>
                            <img
                                src={Azur}
                                alt="logo"
                                className="h-10 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Navbar;
