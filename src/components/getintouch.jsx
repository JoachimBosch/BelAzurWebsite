import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const GetInTouch = () => {
    return (
        <>
            <div className="button-home text-center">
						<Link to="tel:+33626838554">
							<button class="bg-white hover:bg-white text-belazurblue font-semibold hover:text-belazurblue py-2 px-4 border-none border-blue-500 hover:border-transparent rounded button-home">
								<FontAwesomeIcon icon={faPhone} /> Call us to get started
							</button>
						</Link>
				</div>
        </>
    );
};

export default GetInTouch;
