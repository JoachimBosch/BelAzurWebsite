import { Link } from "react-router-dom";


const Vitrine = () => {


    return (
        <>
        <div className="container mt-28">
            <div className="flex flex-col items-center">
                <h1>Vitrine</h1>
                <h2>Fast and easy implementation. <strong>Online in only a few days.</strong></h2>
            </div>
            <div className="mt-10">
                <h1 className="text-center">What's included:</h1>
                <div className="grid grid-cols-2 gap-2 my-20 mx-20">
                    <div className="border px-4 py-4">
                        <ul>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                        </ul>
                    </div>
                    <div className="border px-4 py-4">
                        <ul>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center">
                <h1>Process description</h1>
                <div className="">
                    Step 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Step 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Step 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Step 4: Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-center">Proceed:</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col text-center">
                        Proceed offline
                        <Link to="/contact">
                            <button>Contact us</button>
                        </Link>
                    </div>
                    <div className="flex flex-col text-center">
                        Proceed online
                        <Link to="/services/vitrine/build">
                            <button>Build your site immediately</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default Vitrine;