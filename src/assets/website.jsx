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
                    <h1 className="mb-4">Tailored Multi-Page Websites That Grow With Your Business</h1>

                    <p>
                        A multi-page website is ideal for businesses that
                        need to present a lot of information in an organized,
                        engaging way. 
                        <br />Whether you're an event planner outlining
                        your services, a construction firm showcasing your past
                        projects, or a community organization sharing resources.
                        <br /> We create a website that's easy to navigate and
                        enjoyable for visitors to explore.
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
                            Think of it as a full digital experience. Instead of
                            packing everything onto one page, we spread your
                            content across several well-organized pages, like
                            “About Us”, “Services”, “Portfolio”, or “Contact”.
                            This layout helps guide visitors through your site,
                            giving them the details they need without
                            overwhelming them. It's flexible and built to grow
                            as your business evolves.
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
                            platforms that provide regular updates <br />
                        </div>
                    </div>
                    <div className="border my-12 p-4" >
                        <h2>Benefits</h2>
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faCheck} /> Helps visitors find information quickly and easily 
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> Reflects a polished, credible image for your brand
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> Allows for rich, detailed content like blogs, galleries, and portfolios 
                            <br />
                            <FontAwesomeIcon icon={faCheck} /> Perfect for businesses that plan to grow and add more services or pages 
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
