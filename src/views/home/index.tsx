// <!-- home -->
import React, { useState } from "react";
import { accountStores } from "@/store/index";

const View: React.FC = () => {
	const [str] = useState<string>("home");
	const { userInfo } = accountStores(); //account
	return (
		<>
			<div>{userInfo.nickname}</div>
			<div className="font-primary bg-primary/50 aa">{str}</div>
			<div className="font-arial bg-regular/50 bb">{str}</div>
		</>
	);
};

export default View;
