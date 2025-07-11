// <!-- menu-pc-view -->
import React from "react";
import { useNavigate } from "react-router-dom";

import { routerList } from "../menu"; //routerlist

import IconJump from "@/assets/imgs/common/icon-jump.svg?react"; //icon
import IconArrow from "@/assets/imgs/common/icon-arrow.svg?react"; //icon

const View: React.FC = () => {
	const navigate = useNavigate();
	// 跳转
	const goRouter = (item: any) => {
		if (!item.children) {
			// router-link
			if (item.linkState) {
				if (item.path) {
					navigate(item.path);
				}
			} else {
				// 外部-link
				if (item.path) {
					window.open(item.path, "_blank");
				}
			}
		}
	};
	return (
		<div className="hidden lg:flex justify-center items-center">
			{routerList.map((item: any, index: React.Key | null | undefined) => (
				<div
					key={index}
					className={`${!item.children && !item.path ? " hover:cursor-not-allowed " : " "} group cursor-pointer flex justify-center items-center relative h-9 px-3.5 rounded-lg hover:bg-white/10 `}
				>
					<div
						onClick={() => {
							goRouter(item);
						}}
						className=" flex justify-between items-center gap-1"
					>
						<span className="text-xl">{item.name}</span>
						{item.children ? (
							<IconArrow className="rotate-180 size-4 group-hover:rotate-0" />
						) : (
							<>{!item.linkState && <IconJump className="size-6" />}</>
						)}
					</div>

					{item.children && (
						<div className="absolute top-0 left-1/2 translate-x-[-50%] pt-[40px] hidden group-hover:block">
							<div className="bg-bgcolor-100/20 p-3 rounded-lg border border-white/10">
								{item.children.map((t: any, i: React.Key | null | undefined) => {
									return (
										<div
											key={i}
											onClick={() => {
												goRouter(t);
											}}
											className={`${t.path ? "" : " text-text-100 hover:cursor-not-allowed "} cursor-pointer text-base flex justify-between items-center gap-6 py-2 px-4 rounded-md hover:bg-white/10 `}
										>
											<span>{t.name}</span>
											{!t.linkState && <IconJump className="size-6" />}
										</div>
									);
								})}
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default View;
