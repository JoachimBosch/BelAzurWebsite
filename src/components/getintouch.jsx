import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const GetInTouch = () => {
    return (
        <>
            <div className="mt-10 flex flex-col">
                <h1 className="text-center">Let's get in touch</h1>
                <div className="flex justify-center">
                    <span>
                        <h1 className="text-center">
                            <a href="tel:+33626838554">
                                <FontAwesomeIcon icon={faPhone} />
                                &nbsp; Now
                            </a>
                        </h1>
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                        <h1 className="text-center">
                            <a href="/contact">
                                <FontAwesomeIcon icon={faEnvelope} />
                                &nbsp; Later
                            </a>
                        </h1>
                    </span>
                </div>
            </div>
        </>
    );
};

export default GetInTouch;
