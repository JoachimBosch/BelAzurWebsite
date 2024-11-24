import { useContext } from "react"
import MyContext from "../context/context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBackward } from "@fortawesome/free-solid-svg-icons"


const ServiceButton = () => {
    const { setPage } = useContext(MyContext)

    return (
        <div className="text-center py-8">
            <button
                onClick={() => {
                    setPage("allServices");
                }}
            >
                <FontAwesomeIcon icon={faBackward} /> &nbsp; Back to service
                overview
            </button>
        </div>
    );
}

export default ServiceButton