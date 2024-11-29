import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Azur from "../../public/media/img/Azur.png";
import MENU from "../../public/media/img/ME NU.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const navigation = [
	{ name: "HOME", href: "/" },
	{ name: "SERVICES", href: "/services" },
	{ name: "ABOUT", href: "/about" },
	{ name: "CONTACT", href: "/contact" },
];

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
					className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
					style={{ backgroundColor: "#f2bb05" }}
				>
					<div className="flex items-center justify-between">
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
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-white"
									>
										{item.name}
									</a>
								))}
							</div>
							<div className="flex justify-evenly pt-4">
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
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
};

export default Navbar;
