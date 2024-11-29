
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ServiceButton from "../components/serviceButton";
import GetInTouch from "../components/getintouch";

const Vitrine = () => {
    return (
        <>
            <div className="mx-auto pt-18" style={{ maxWidth: "1280px" }}>

                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">Simple, Impactful One-Page Websites for Your Business.</h1>

                    <p>
                        A ”one-page” website is a simple concept, even though it actually consists of two pages: a front page and a contact page. 
                        On your front page, you introduce yourself to the public. You can tell who you are, what you do - and maybe why you do it, and so much more.  
                        Your contact page provides a way for people to get in touch with you. This can be a contact form, an address link, a link to your social media page, etc. <br />
                        The possibilities are endless.
                    </p>
                </div>
                <div
                    className="mt-10 mx-10 flex justify-center"
                    style={{ height: "auto" }}
                >
                    <div
                        className="border me-8 p-8 flex flex-col place-content-evenly"
                        style={{
                            width: "400px",
                            backgroundColor: "white",
                        }}
                    >
                        <p className="text-justify">
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
                <div className="mt-10 text-center">
                    <h1>Perfect for</h1>
                    <div className="mx-auto ">
                        <FontAwesomeIcon icon={faCheck} /> Promoting an event or
                        special offer
                        &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faCheck} /> Highlighting a main
                        product or service &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faCheck} /> Showing off your work
                        or achievements in a simple portfolio <br />
                        <FontAwesomeIcon icon={faCheck} /> Setting your first steps online <br />
                    </div>
                </div>
                <GetInTouch />
                <ServiceButton />
            </div>
        </>
    );
};

export default Vitrine;
