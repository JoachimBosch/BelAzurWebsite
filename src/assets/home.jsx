import { Link } from "react-router-dom";
import WhyUs from "../components/whyUs";
import Typewriter from 'typewriter-effect';
import GetInTouch from "../components/getintouch";
import MailUs from "../components/mailUs";

const Home = () => {

	return (
		<>
			<div
				className="mx-auto
            "
			>
				<div className="intro px-4 pt-60 pb-20 flex flex-col content-center">
					<h1 className="text-center"><Typewriter
						options={{
							strings: ['Hello & Welcome,', 'Bonjour & Bienvenue,'],
							autoStart: true,
							loop: true,
						}}
					/></h1>
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
						<GetInTouch />
					</div>
				</div>
				<div>
					<WhyUs />
				</div>
				<div className="intro px-8">
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
					<br />
					<h2 className="text-center">
						{"< "}Let's transform your ideas into an exceptional online
						experience{" />"}
					</h2>
				</div>
				<div className="text-center">
					<MailUs />
				</div>
			</div>
		</>
	);
};

export default Home;
