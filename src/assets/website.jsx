

const Website = () => {


    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
                <div className="flex flex-col items-center">
                    <h1>Website</h1>
                    <h2>
                        Complete online visibility.{" "}
                        <strong>Completely tailored to your wishes</strong>
                    </h2>
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
                        Step 1: Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. <br />
                        Step 2: Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. <br />
                        Step 3: Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. <br />
                        Step 4: Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. <br />
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <h1>Do you want to receive more information?</h1>
                    <button>Book an appointment</button>
                </div>
            </div>
        </>
    );
}

export default Website;