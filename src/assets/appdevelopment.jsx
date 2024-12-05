import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ServiceButton from "../components/serviceButton";
import GetInTouch from "../components/getintouch";
import MailUs from "../components/mailUs";

const Website = () => {
    return (
        <>
            <div className="mx-auto px-4 pt-28">
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">Build Your Brand’s Presence in the Palm of Your Customers’ Hands</h1>

                    <p>
                    Our app development services are perfect for businesses
                    ready to make a big impact on mobile.
                        <br />Whether you want
                        to create a food ordering app, streamline your booking
                        process, or launch something entirely unique,
                        <br /> we design
                        and build apps that are fast, reliable, and easy to use.
                        <br />
                        Your customers will enjoy a smooth experience on both
                        iOS and Android, and you’ll have the tech to support
                        your business growth.
                    </p>
                </div>
                <div
                    className="mt-10 mx-10 flex justify-center"
                    style={{ height: "auto" }}
                >
                    <div className="border " style={{ width: "400px" }}></div>
                    <div
                        className="border ms-8 p-8 flex flex-col place-content-evenly"
                        style={{ width: "400px", backgroundColor: "white" }}
                    >
                        <p className="text-justify text-belazurblue">
                        It's about bringing your ideas to life in the palm
                            of your customers' hands. We use React Native, a
                            powerful technology stack that allows us to build
                            apps efficiently for both iOS and Android with just
                            one codebase. This means faster development, fewer
                            maintenance headaches, and consistent performance
                            across devices. Our apps are custom-made to fit your
                            business, ensuring they look great and work
                            perfectly.
                        </p>
                    </div>
                </div>
                <div className="text-center">
						<MailUs />
				</div>
                <div class="grid grid-cols-2 gap-4 mx-auto" style={{ maxWidth: "1240px"}}>
                    <div className="border my-12 p-4" >
                        <h2>Perfect for</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} /> Businesses wanting to
                            connect with customers through mobile
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> Companies looking to
                        streamline processes 
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> Brands with unique
                            app ideas that require a tailored experience 
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> Startups aiming for
                            efficient development and long-term scalability <br />
                        </div>
                    </div>
                    <div className="border my-12 p-4" >
                        <h2>Benefits</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} /> Keep customers connected with your business anytime, anywhere 
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> Automate bookings, payments, and other key functions for improved efficiency
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> One app that works perfectly on both iOS and Android 
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> A user-friendly app keeps customers coming back 
                            <br />
                            
                        </div>
                    </div>
                </div>
                
            </div>
            <GetInTouch />
            <ServiceButton />
        </>
    );
};

export default Website;
