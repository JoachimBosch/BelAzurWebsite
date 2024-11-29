import { useContext } from "react";
import MyContext from "../context/context";

const Contact = () => {
	const { form, setForm } = useContext(MyContext);

	console.log(form);

	return (
		<>
			<div className="intro pt-28 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
					<h1>Contact us</h1>
				</div>
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="flex flex-col">
						<label for="firstName">First Name: *</label>
						<input
							type="text"
							id="fname"
							name="fname"
							required
							onChange={(e) =>
								setForm({
									...form,
									fname: e.target.value,
								})
							}
						/>
						<label for="lastName">Last name: *</label>
						<input
							type="text"
							id="lname"
							name="lname"
							required
							onChange={(e) =>
								setForm({
									...form,
									lname: e.target.value,
								})
							}
						/>
						<label for="phone">Phone number: *</label>
						<input
							type="text"
							id="phone"
							name="phone"
							required
							onChange={(e) =>
								setForm({
									...form,
									phone: e.target.value,
								})
							}
						/>
						<label for="email">Email address: *</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							onChange={(e) =>
								setForm({
									...form,
									email: e.target.value,
								})
							}
						/>
						<label for="company">Company: *</label>
						<input
							type="text"
							id="company"
							name="company"
							onChange={(e) =>
								setForm({
									...form,
									company: e.target.value,
								})
							}
						/>
						<label for="interest">I'm interested in:</label>
						<select
							className="mb-2"
							onClick={(e) =>
								setForm({
									...form,
									interest: e.target.value,
								})
							}
						>
							<option></option>
							<option>One-Page Website</option>
							<option>Multi-Page Website</option>
							<option>E-commerce Website</option>
							<option>Other</option>
						</select>
						<label for="freeText">Additional information:</label>
						<textarea
							type="text"
							id="freeText"
							name="freeText"
							className="mb-4"
							onChange={(e) =>
								setForm({
									...form,
									freeText: e.target.value,
								})
							}
						/>
						<button>Submit</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
