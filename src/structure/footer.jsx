import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    return (
        <>
            <div className="mb-0 mt-20 border grid grid-cols-5 gap-4 footer">
                <div className="col-span-1"> </div>
                <div className="col-span-3 reference">
                    Bel'Azur Coding © 2024
                    <br />
                    <Link to="/policy" className="footerLink">
                        Privacy Policy - Cookie Policy - Terms & Conditions
                    </Link>
                </div>
                <div className="col-span-1 reference">
                    <span>
                        <Link to="https://facebook.com" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} /> Visit us on Facebook
                        </Link>
                    </span>
                    
                </div>
            </div>
        </>
    )

}

export default Footer;