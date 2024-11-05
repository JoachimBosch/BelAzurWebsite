const Website = () => {
    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">Multi-Pager Website</h1>

                    <p>
                        For businesses that need a comprehensive online
                        presence, our custom multi-pager websites offer a robust
                        and flexible solution. We take a strategic approach,
                        building a site that can accommodate a wide range of
                        content while guiding users smoothly from page to page.
                        Our designs emphasize functionality and aesthetics,
                        ensuring that your brand is well-represented across
                        every page.
                    </p>
                </div>
                <div className="mt-10 mx-10 flex justify-center">
                    <div
                        className="border "
                        style={{ height: "400px", width: "400px" }}
                    ></div>
                    <div
                        className="border ms-8 p-8"
                        style={{ height: "400px", width: "400px" }}
                    >
                        <h1>Simple, Effective, Impactful</h1>
                        <p>
                            Multi-pager websites are ideal for businesses that
                            need to present extensive information, such as
                            service-based companies, organizations, or
                            content-driven platforms. They offer the flexibility
                            to grow and evolve as your business expands.
                        </p>
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
};

export default Website;
