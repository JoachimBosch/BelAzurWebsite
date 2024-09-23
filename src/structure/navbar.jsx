import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useState, useRef, useContext } from 'react';
import Azur from '../../public/media/img/Azur.png'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyContext from '../context/context';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Profile', href: '/profile' } /* Delete after */
];

const servicesDropdown = [
  { name: 'All Services', href: '/services' },
  { name: 'Vitrine', href: '/services/vitrine' },
  { name: 'Website', href: '/services/website' },
  { name: 'E-commerce', href: '/services/e-commerce' },
  { name: 'App Development', href: '/services/apps' },
];

const Navbar = () => {
    const { token, logout } = useContext(MyContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const hideTimeout = useRef(null); 
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

    const handleMouseEnter = () => {
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
        }
        setIsServicesOpen(true);
        setIsNavbarExpanded(true);
    };

    const handleMouseLeave = () => {
        hideTimeout.current = setTimeout(() => {
            setIsServicesOpen(false);
            setIsNavbarExpanded(false);
        }, 200);
    };

    return (
        <div className="flex">
            <header className={`absolute inset-x-0 top-0 z-100 border-b border-black transition-all bg-white duration-300 ${isNavbarExpanded ? 'h-36' : 'h-20'}`}>
                <nav aria-label="Global" className="flex items-center justify-between pt-6 pb-3 px-8">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Bel'Azur Coding</span>
                            <img src={Azur} alt="logo" className="h-12 w-auto" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-black"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-12 w-12" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={item.name === 'Services' ? handleMouseEnter : null}
                                onMouseLeave={item.name === 'Services' ? handleMouseLeave : null}
                            >
                                <a
                                    href={item.href}
                                    className="text-xl font-semibold leading-6 text-gray-800 hover:underline"
                                >
                                    {item.name}
                                </a>
                                {item.name === 'Services' && isServicesOpen && (
                                    <div className="absolute top-full mt-2 z-10 flex font-semibold justify-center left-1/2 transform -translate-x-1/2" style={{width: "600px"}}>
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
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end" style={{color: "#83c5be",}}>
                        { !token ? 
                        <div>
                        <Link to='/login'>
                            <div className="px-4 relative font-semibold text-xl">
                            <FontAwesomeIcon icon={faRightToBracket} /> Login
                            </div>
                        </Link>
                        </div>
                        :
                        <div>
                            <div className="px-4 relative font-semibold text-xl">
                              <button onClick={logout}>
                              <FontAwesomeIcon icon={faRightToBracket} /> Logout
                              </button>
                            
                            </div>
                        </div>
                        }
                        
                    </div>
                </nav>

                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#ffffff] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Bel'Azur coding</span>
                                <img alt="" src="" className="h-10 w-auto" />
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
                                <div className="py-4">
                                    Login
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </div>
    );
};

export default Navbar;
