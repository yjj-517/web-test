/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		// fontFamily
		fontFamily: {
			primary: "Oswald,Arial",
			arial: "var(--sm-font-family-1)",
		},
		// screens
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			// grid
			gridTemplateColumns: {
				"collection-grid-sm": "repeat(auto-fill, minmax(240px, 1fr))",
			},
			// 关键帧
			keyframes: {},
			// 动画
			animation: {
				"spin-slow-1": "spin 1s linear infinite",
			},
			// 颜色
			colors: {
				primary: "#87cd00", //主色
				regular: "#00b4cd", //常规色
				secondary: "", //次要色
				disabled: "#ff99ff", //禁用色
				// background-color
				bgcolor: {
					100: "#ffffff",
				},
				// text-color
				text: {
					100: "#cccccc",
				},
			},
		},
	},
	plugins: [],
};
