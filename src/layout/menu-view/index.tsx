// <!-- menu-view -->
import React from "react";

import MenuPcView from "./menu-pc-view";

import IconArrow from "@/assets/imgs/common/icon-arrow.svg?react"; //icon-向下提示

interface ViewProps {
	toggleMenu: (state: any) => void; //
	showMenuMobile: boolean;
}

const View: React.FC<ViewProps> = ({ toggleMenu, showMenuMobile }: ViewProps) => {
	return (
		<>
			<MenuPcView />
			<button
				className="cursor-pointer lg:hidden flex justify-center items-center rounded-full size-6 bg-white/20 group"
				onClick={() => {
					toggleMenu(!showMenuMobile);
				}}
			>
				<IconArrow
					className={`${showMenuMobile ? " rotate-[270deg] " : " rotate-90 "} size-4 text-white group-hover:text-primary `}
				/>
			</button>
		</>
	);
};

export default View;
