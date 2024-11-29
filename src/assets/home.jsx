import { Link } from "react-router-dom";
import Pricing from "../components/pricing";
import WhyUs from "../components/whyUs";
import test1 from "../../public/media/img/1.png";

const Home = () => {
	return (
		<>
			<div
				className="mx-auto
            "
			>
				<div className="intro py-60 flex flex-col content-center">
					<h1 className="text-center">Hello & Welcome</h1>
					<h2 className="text-center">
						At Bel'Azur Coding, we specialize in creating tailored,
						high-performance websites that are as unique as your
						business.
					</h2>
					<h2 className="text-center">
						We offer a strong commitment to quality and a flair for
						elegant, hand-coded solutions.
					</h2>
					<h2 className=" text-center mt-4">
						Together, we turn your digital dreams into reality.
					</h2>
					<div className="button-home text-center">
						<Link to="/contact">
							<button class="bg-white hover:bg-white text-belazurblue font-semibold hover:text-belazurblue py-2 px-4 border-none border-blue-500 hover:border-transparent rounded button-home">
								Contact us
							</button>
						</Link>
					</div>
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
