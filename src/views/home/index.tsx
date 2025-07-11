// <!-- home -->
import React from "react";

import { useLang, switchLanguage } from "@/utils/language/index.tsx"; //lang

const View: React.FC = () => {
	const { home } = useLang(); //lang
	const changeLange = (lang: string) => {
		document.documentElement.lang = lang;
		document.documentElement.setAttribute("data-theme", "bule");
	};
	return (
		<>
			<div className="h-98">
				<button
					onClick={() => {
						switchLanguage("en");
					}}
				>
					切换语言
				</button>
				<div className="text-red-500 dark:text-shadow-blue-700 bg-red-600 dark:bg-black">
					fafasfasfasdfasfasfasdf
				</div>
				<div className="font-primary">{home.title}</div>
				<div className="font-regular">home HOME</div>
				<div className="">home HOME</div>
				<div className="text-primary">123456789</div>
				<div className="text-regular">123456789</div>
				<div className="text-secondary">123456789</div>
				<div className="text-disabled">123456789</div>
				<div className="text-primary font-primary">HOME home 123456789</div>
				<div className="text-primary">HOME home 123456789</div>
				<div className="text-primary">HOME home 123456789</div>
				<div>Whereas disregard and contempt for human rights have resulted</div>
				<div className="text-canvas text-3xl">我爱一条柴</div>
				<button
					onClick={() => {
						changeLange("tw");
					}}
				>
					切换语言
				</button>
			</div>
			<div className="h-98">
				<div className="text-primary">123456789</div>
				<div className="text-regular">123456789</div>
				<div className="text-secondary">123456789</div>
				<div className="text-disabled">123456789</div>
				<div className="text-bgcolor-100">123456789</div>
				<div className="text-bgcolor-200">123456789</div>
				<div className="text-bgcolor-300">123456789</div>
				<div className="text-text-100">123456789</div>
				<div className="text-text-200">123456789</div>
			</div>
			<div className="h-98">home</div>
		</>
	);
};

export default View;
