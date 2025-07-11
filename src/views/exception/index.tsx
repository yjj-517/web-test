// <!-- exception -->
import React from "react";

import { useLang } from "@/utils/language/index.tsx"; //lang

import Exception from "@/assets/imgs/exception/exception.png"; //exception

const View: React.FC = () => {
	const { exception } = useLang(); //lang
	return (
		<div className="absolute z-20 w-full h-full flex flex-col items-center justify-center text-center px-5">
			<img src={Exception} alt="404" className="w-[109px] object-cover" />
			<p className=" text-primary font-bold text-3xl mt-12">{exception.title}</p>
			<p className="mt-5">{exception.description}</p>
		</div>
	);
};

export default View;
