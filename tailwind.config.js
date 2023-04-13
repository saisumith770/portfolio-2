/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// that is animation class
			animation: {
				fadeOut: "fadeOut 0.6s ease-in-out",
				fadeIn: "fadeIn 0.6s ease-in-out",
				moveTopLeft: "moveTopLeft 0.4s ease-in-out",
				moveBottomRight: "moveBottomRight 0.4s ease-in-out",
			},

			// that is actual animation
			keyframes: (theme) => ({
				fadeOut: {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				moveTopLeft: {
					"0%": { transform: "translate(1.75rem,1.75rem)" },
					"100%": { transform: "translate(0.75rem,0.75rem)" },
				},
				moveBottomRight: {
					"0%": { transform: "translate(0.75rem,0.75rem)" },
					"100%": { transform: "translate(1.75rem,1.75rem)" },
				},
			}),
		},
		colors: {
			dark_background: "#020D1A",
			background: "#0A182E",
			primary: "#65FEDA",

			silver: "#919DB9",
		},
	},
	plugins: [],
};
