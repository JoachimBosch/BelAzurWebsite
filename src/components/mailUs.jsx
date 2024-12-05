import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MailUs = () => {
    return (
        <>
            <div className="button-home text-center">
						<Link to="/contact">
							<button class="bg-white hover:bg-white text-belazurblue font-semibold hover:text-belazurblue py-2 px-4 border-none border-blue-500 hover:border-transparent rounded button-home">
								<FontAwesomeIcon icon={faEnvelope} /> Why don't we schedule a meeting?
							</button>
						</Link>
				</div>
        </>
    );
};

export default MailUs;