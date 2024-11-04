

const Workflow = () => {


    return (
        <>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 my-8 flex flex-col flex-wrap content-center">
            <h1 className="text-center">How we work:</h1>
            <p className="text-center">Every approach is tailored to your needs, timeline and budget. Some requests are easier, while others take up more time.</p>
            <p className="text-center">In general, this is what the process looks like:</p>
            <div className="mt-8 flex">
                <div className="box-flow">
                    <h1>Step 1: Phone call</h1>
                    <p>We assess your needs and requirements by phone, and set an appointment for a virtual or on-site meeting</p>
                </div>
                <div className="blank-flow">
                    blank
                </div>
                <div className="box-flow">
                <h1>Step 2: (virtual) meeting</h1>
                <p>During this meeting, we discuss your requirements and wishes. This will allow us to create a plan and proper quote.</p>
                </div>
            </div>
            <div className="mt-16 flex">
                <div className="box-flow">
                <h1>Step 3: Official proposal</h1>
                <p>Once the design and calculation are finished, we present you with our plan of approach, timelines and pricing.</p>
                </div>
                <div className="blank-flow">
                blank
                </div>
                <div className="box-flow">
                <h1>Step 4: Build & Iterate</h1>
                <p>Your project is getting shape! We started the coding process and provide frequent updates on the status.</p>
                </div>
            </div>
            <div className="mt-16">
                <div className="box-final mx-auto">
                    <h1>3... 2... 1... Launch</h1>
                    <p>Your project is deployed and you're now present online!</p>
                </div>
                
            </div>
            
        </div>
        </>
    )
};

export default Workflow