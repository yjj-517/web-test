// <!-- logo -->
import React from "react";

import LogoIcon from "@/assets/imgs/logo/logo.svg?react"; //logo

const View: React.FC = () => {
	return (
		<a
			href="/"
			target="_top"
			rel="nofollow noopener noreferrer"
			className="flex items-center h-full"
		>
			<LogoIcon className="h-full w-auto text-primary" />
		</a>
	);
};

export default View;
