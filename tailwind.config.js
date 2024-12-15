/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite-react/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				belazurblue: "#125E8A",
				belazurpink: "#a13d63"
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
