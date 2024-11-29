const About = () => {
	return (
		<>
			<div className="intro mx-auto pt-28">
				<div className="text-center">
					<h1>About us</h1>
				</div>
				<div className="mt-8">
					<h1>Lisa Lowagie</h1>
					<div className="grid grid-cols-2 gap-2 flex items-center">
						<div>
							<img
								className="aboutProfilePic "
								src="../../public/media/img/lisa.jpeg"
								alt="Lisa Lowagie"
							></img>
						</div>
						<div className="flex mt-4 mb-4">
							<div>
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
				<div className="mt-8">
					<h1>Joachim Bosch</h1>
					<div className="grid grid-cols-2 gap-2">
						<div>
							<img
								className="aboutProfilePic"
								src="../../public/media/img/joachim.jpeg"
								alt="Joachim Bosch"
							></img>
						</div>
						<div className="flex mt-4 mb-4">
							<div>
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
