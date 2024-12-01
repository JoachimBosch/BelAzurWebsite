import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ServiceButton from "../components/serviceButton";
import GetInTouch from "../components/getintouch";

const Vitrine = () => {
    return (
        <>
            <div className="mx-auto px-4 pt-28">

                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">Simple, Impactful One-Page Websites for Your Business.</h1>

                    <p>
                        A one-page website is a simple concept. It's an affordable web design that actually consists of two pages: a front page and a contact page. 
                        On your front page, you introduce yourself to the public. You can tell who you are, what you do - and maybe why you do it, and so much more.  
                        Your contact page provides a way for people to get in touch with you. This can be a contact form, an address link, a link to your social media page, etc. <br />
                        The possibilities are endless.
                    </p>
                </div>
                <div
                    className="my-10 mx-10 flex justify-center"
                    style={{ height: "auto" }}
                >
                    <div
                        className="border me-8 p-8 flex flex-col place-content-evenly"
                        style={{
                            width: "400px",
                            backgroundColor: "white",
                        }}
                    >
                        <p className="text-justify text-belazurblue">
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
                <div className="button-home text-center">
						<Link to="/contact">
							<button class="bg-white hover:bg-white text-belazurblue font-semibold hover:text-belazurblue py-2 px-4 border-none border-blue-500 hover:border-transparent rounded button-home">
								Get Your Business Online Today
							</button>
						</Link>
				</div>
                <div className="grid grid-cols-2 gap-4 mx-auto" style={{ maxWidth: "1240px"}}>
                    <div className="border my-12 p-4" >
                        <h2>Perfect for</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} /> Promoting an event or
                            special offer
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> Highlighting a main
                            product or service 
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> Showing off your work
                            or achievements in a simple portfolio 
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> Setting your first steps online <br />
                        </div>
                    </div>
                    <div className="border my-12 p-4" >
                        <h2>Benefits</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} /> A domain name reflecting the name of your business 
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> Fast setup with minimal costs
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> Perfect for small businesses or individuals starting out online 
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> Mobile-friendly design ensures a great experience for all users 
                            <br />
                            
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    
                </div>
                <GetInTouch />
                <ServiceButton />
            </div>
        </>
    );
};

export default Vitrine;
