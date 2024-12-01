import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			<div className="intro mx-auto pt-28">
				<div className="text-center">
					<h1>Meet the team:</h1>
				</div>
				<div className="py-8 mx-auto" style={{ maxWidth: "1280px"}}>
					<h1 className="text-center">Lisa Lowagie</h1>
					<div className="grid grid-cols-2 gap-2 mx-auto">
						<div>
							<Link to="https://github.com/lisalowagie" target="_blank">
							<img
								className="aboutProfilePic m-auto"
								src="../../public/media/img/lisa.jpeg"
								alt="Lisa Lowagie"
							></img>
							</Link>
							
						</div>
						<div className="flex mt-4 mb-4 aboutUs">
							<div className="content-center">
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Delectus, nemo facilis
									deleniti optio modi voluptate, beatae quia
									ex ratione expedita dolores a cumque, et
									dolor laborum velit magnam. Temporibus,
									debitis?
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="py-8 mx-auto" style={{ maxWidth: "1280px"}}>
					<h1 className="text-center">Joachim Bosch</h1>
					<div className="grid grid-cols-2 gap-2 mx-auto">
						<div>
							<Link to="https://github.com/joachimBosch/" target="_blank">
							<img
								className="aboutProfilePic m-auto"
								src="../../public/media/img/joachim.jpeg"
								alt="Joachim Bosch"
							></img>
							</Link>
						</div>
						<div className="flex mt-4 mb-4 aboutUs">
							<div className="content-center">
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Delectus, nemo facilis
									deleniti optio modi voluptate, beatae quia
									ex ratione expedita dolores a cumque, et
									dolor laborum velit magnam. Temporibus,
									debitis?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
