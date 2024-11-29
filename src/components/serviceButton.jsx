import { useContext } from "react"
import MyContext from "../context/context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBackward } from "@fortawesome/free-solid-svg-icons"


const ServiceButton = () => {
    const { setPage } = useContext(MyContext)

    return (
        <div className="text-center py-6
        ">
            <button
                onClick={() => {
                    setPage("allServices");
                }}
            >
                <FontAwesomeIcon icon={faBackward} /> &nbsp; BACK TO ALL SERVICES
            </button>
        </div>
    );
}

export default ServiceButton