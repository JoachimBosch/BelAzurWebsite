import { Link } from "react-router-dom";
import Pricing from "../components/pricing";
import WhyUs from "../components/whyUs";
import WorkflowCarousel from "../components/workflowCarousel";

const Home = () => {
    return (
        <>
            <div
                className="mx-auto
            "
            >
                <div className="intro py-80 flex flex-col content-center">
                    <h2
                        className="intro text-center"
                        style={{ background: "none" }}
                    >
                        At Bel'Azur Coding, we specialize in creating tailored,
                        high-performance websites that are as unique as your
                        business. We offer a strong commitment to quality and a
                        flair for elegant, hand-coded solutions.
                    </h2>
                    <h2
                        className="intro text-center mt-4"
                        style={{ background: "none" }}
                    >
                        Together, we turn your digital dreams into reality.
                    </h2>
                </div>
                <div>
                    <WhyUs />
                </div>
                <div>
                    <Pricing />
                </div>
                <div className="philosophy px-8 py-12">
                    <h1 className="text-center">OUR PHILOSOPHY</h1>
                    <p className="text-center">
                        We believe in clean code, clean design, and clear
                        communication. Every project we take on is a
                        collaborative journey, and your satisfaction is our
                        ultimate goal.
                    </p>
                    <p className="text-center">
                        From concept to launch, we're here to ensure your
                        digital presence makes a powerful impact.
                    </p>
                </div>
                {/* <Workflow /> */}
                <WorkflowCarousel />
                <div className="text-center">
                    <h2>
                        Let's transform your ideas into an exceptional online
                        experience.
                    </h2>
                    <h2 className="mb-4">
                        Place your order for a one-pager today or contact us to
                        discuss a custom project.
                    </h2>
                    <Link to="/contact">
                        <button>Let's get in touch</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
