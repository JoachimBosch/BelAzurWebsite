import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Website = () => {
    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">Multi-Pager Website</h1>

                    <p>
                        Our multi-pager websites are ideal for businesses that
                        need to present a lot of information in an organized,
                        engaging way. Whether you're an event planner outlining
                        your services, a construction firm showcasing your past
                        projects, or a community organization sharing resources,
                        we create a website that's easy to navigate and
                        enjoyable for visitors to explore.
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
                        <h1>What's a multi-page website?</h1>
                        <p>
                            Think of it as a full digital experience. Instead of
                            packing everything onto one page, we spread your
                            content across several well-organized pages, like
                            “About Us,” “Services,” “Portfolio,” or “Contact.”
                            This layout helps guide visitors through your site,
                            giving them the details they need without
                            overwhelming them. It’s flexible and built to grow
                            as your business evolves.
                        </p>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <h1>Perfect for</h1>
                    <div className="mx-auto">
                        <FontAwesomeIcon icon={faCheck} /> Service-based
                        companies that need to describe various offerings
                        <br />
                        <FontAwesomeIcon icon={faCheck} /> Organizations sharing
                        resources, news, or events
                        <br />
                        <FontAwesomeIcon icon={faCheck} /> Businesses with a
                        large portfolio of work to showcase
                        <br />
                        <FontAwesomeIcon icon={faCheck} /> Content-driven
                        platforms that provide regular updates
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

export default Website;
