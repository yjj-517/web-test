// <!-- account-view -->
import React from "react";

import ChangeLangView from "@/layout/components/change-lang-view";
import ChangeThemeView from "@/layout/components/change-theme-view";

const View: React.FC = () => {
	return (
		<div className="flex justify-between items-center">
			<ChangeLangView />
			<ChangeThemeView />
		</div>
	);
};

export default View;
