import TechnicalPossibilities from "../components/technicalPossibilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const AppDevelopment = () => {
    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">Mobile app development</h1>

                    <p>
                        Our app development services are perfect for businesses
                        ready to make a big impact on mobile. Whether you want
                        to create a food ordering app, streamline your booking
                        process, or launch something entirely unique, we design
                        and build apps that are fast, reliable, and easy to use.
                        Your customers will enjoy a smooth experience on both
                        iOS and Android, and you’ll have the tech to support
                        your business growth.
                    </p>
                </div>
                <div className="mt-10 mx-10 flex justify-center">
                    <div
                        className="border "
                        style={{ height: "400px", width: "400px" }}
                    ></div>
                    <div
                        className="border ms-8 p-8 flex flex-col place-content-evenly"
                        style={{ height: "400px", width: "400px" }}
                    >
                        <h1>What's App Development?</h1>
                        <p>
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
                <div>
                    <TechnicalPossibilities />
                </div>
                <div className="mt-8">
                    <h1>Who Else Uses React Native?</h1>
                    <p>
                        Some of the world’s biggest companies use React Native,
                        including Facebook, Instagram, Airbnb, and Walmart. This
                        technology stack is known for its robust performance and
                        adaptability, making it a trusted choice for apps that
                        need to work well and look great on any device.
                    </p>
                </div>
                <div className="mt-10 text-center">
                    <h1>Perfect for</h1>
                    <div className="mx-auto">
                        <FontAwesomeIcon icon={faCheck} /> Businesses wanting to
                        connect directly with customers through mobile
                        <br />
                        <FontAwesomeIcon icon={faCheck} /> Companies looking to
                        streamline processes like bookings, deliveries, or
                        communications
                        <br />
                        <FontAwesomeIcon icon={faCheck} /> Brands with unique
                        app ideas that require a tailored experience <br />
                        <FontAwesomeIcon icon={faCheck} /> Startups aiming for
                        efficient development and long-term scalability
                        <br />
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <h1>Do you want to receive more information?</h1>
                    <button>Book an appointment</button>
                </div>
            </div>
        </>
    );
};

export default AppDevelopment;
