module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx,json}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		fontFamily: {
			primary: "Orbitron",
			secondary: "Open Sans",
			tertiary: "Aldrich",
		},
		container: {
			padding: {
				DEFAULT: "15px",
			},
		},
		screens: {
			// xs: "320px",
			sm: "320px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		extend: {
			colors: {
				primary: "#0a0a0a",
				accent: "#B809C3",
			},
			backgroundImage: {
				hero: "url('./assets/hotel.jpg')",
				zomin: "url('./assets/zomin.jpg')",
				bakhmal: "url('./assets/bakhmal.jpg')",
				tog: "url('./assets/tog.jpg')",
				aydarkol: "url('./assets/aydarkol.jpg')",
				about_1: "url('./assets/about_1.jpg')",
				about_img: "url('./assets/image.jpg')",
				tuproq: "url('./assets/tuproq.png')",
			},
		},
	},
	plugins: [require("flowbite/plugin")],

};
