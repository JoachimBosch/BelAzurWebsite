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
                        At Bel'Azur Coding, we specialize in creating bespoke,
                        high-performance websites that are as unique as your
                        business. With a strong commitment to quality and a
                        flair for elegant, hand-coded solutions.
                    </h2>
                    <h2 className="intro text-center mt-4">
                        Together, we turn your digital dreams into reality.
                    </h2>
                </div>
                <div>
                    <WhyUs />
                </div>
                <div>
                    <Pricing />
                </div>
                <div
                    className="clientBanner flex justify-center border gap-20"
                    style={{ height: "100px" }}
                >
                    <span>Img1</span>
                    <span>Img1</span>
                    <span>Img1</span>
                    <span>Img1</span>
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
