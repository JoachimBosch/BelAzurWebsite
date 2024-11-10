import { Link } from "react-router-dom";
import bg_video from "../../public/media/video/bg_video.mp4";
import Pricing from "../components/pricing";
import Workflow from "../components/workflow";
import WhyUs from "../components/whyUs";

const Home = () => {
    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
                <div
                    className="grid grid-cols-4 mx-4"
                    style={{ height: "auto", backgroundColor: "#E9F2F8" }}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        src={bg_video}
                        className="col-span-3"
                        style={{ width: "800px"}}
                    ></video>
                    <div className="col-span-1 my-auto">
                        <h1>Bel'Azur coding</h1>
                        <h2 style={{ fontStyle: "italic" }}>
                            Your Vision, Our Craftsmanship.
                        </h2>
                    </div>
                </div>
                <div className="mt-8 mx-4 flex flex-col content-center">
                    <h2 className="intro text-center">
                        At Bel'Azur Coding, we specialize in creating tailored,
                        high-performance websites that are as unique as your
                        business. We offer a strong commitment to quality and a
                        flair for elegant, hand-coded solutions.
                    </h2>
                    <h2 className="intro text-center mt-4">
                        Together, we turn your digital dreams into
                        reality.
                    </h2>
                </div>
                <div>
                    <WhyUs />
                </div>
                <div>
                    <Pricing />
                </div>
                <div className="philosophy px-8 py-12">
                    <h1 className="text-center">Our philosophy</h1>
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
                <Workflow />
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
