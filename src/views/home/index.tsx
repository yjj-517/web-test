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
			<button className="primary-button w-[100px] h-10 text-amber-300">123123</button>
			<div className=" w-full h-10">
				<div className="h-full trove-scrollbar">
					<div>123456</div>
					<div>123456</div>
					<div>123456</div>
					<div>123456</div>
					<div>123456</div>
					<div>123456</div>
					<div>123456</div>
				</div>
			</div>
		</>
	);
};

export default View;
