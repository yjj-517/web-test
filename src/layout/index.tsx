// <!-- layout -->
import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import HeaderView from "./header-view";
import FooterView from "./footer-view";
import MenuView from "./menu-view";
import MenuMobileView from "@/layout/menu-view/menu-mobile-view/index";

const View: React.FC = () => {
	const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false); //menu-mob弹窗
	const toggleMenu = (state: boolean) => {
		setShowMenuMobile(state);
	};
	return (
		<>
			<main className="relative z-50 max-w-[100vw] w-full overflow-x-hidden">
				<HeaderView>
					<MenuView toggleMenu={toggleMenu} showMenuMobile={showMenuMobile} />
				</HeaderView>
				<main className="relative w-full min-h-[calc(100vh-var(--sm-layout-height))]">
					<Outlet />
				</main>
				<FooterView />
			</main>
			{showMenuMobile && <MenuMobileView onClose={toggleMenu} />}
		</>
	);
};

export default View;
