// <!-- header -->
import React from "react";

import IconLogo from "@/assets/imgs/logo/logo.svg?react"; //logo
import AccountView from "./account-view/index";

const View: React.FC<React.PropsWithChildren> = ({ children }: React.PropsWithChildren) => {
	return (
		<>
			<header className="fixed top-0 left-1/2 z-50 mx-auto max-h-screen w-screen -translate-x-1/2 flex flex-col justify-between items-center p-3 md:p-6">
				<div className="max-w-7xl w-full bg-theme-text/15 backdrop-blur-lg px-5 h-[var(--sm-layout-header-height)] flex justify-between items-center rounded-2xl gap-4 border border-theme-text/5">
					<div className="w-full flex items-center gap-2">
						<div className="flex items-center gap-2 lg:gap-6">
							<a
								href="/"
								target="_top"
								rel="nofollow noopener noreferrer"
								className="flex items-center h-9 gap-2"
							>
								<IconLogo className="h-full w-auto text-primary" />
								<p className="hidden sm:flex text-xl font-bold text-primary">BAGUAAI</p>
							</a>
						</div>
						{children}
					</div>
					<AccountView />
				</div>
			</header>
		</>
	);
};

export default View;
