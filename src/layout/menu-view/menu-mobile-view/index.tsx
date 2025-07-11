// header-view
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom"; //router

import CommunityView from "@/layout/components/community-view"; //communityList
import { routerList } from "../menu"; //routerlist

import SimsportsLogo from "@/assets/imgs/logo/logo.svg?react"; //logo
import IconClose from "@/assets/imgs/common/icon-close.svg?react"; //logo
import IconJump from "@/assets/imgs/common/icon-jump.svg?react"; //icon
import IconArrow from "@/assets/imgs/common/icon-arrow.svg?react"; //icon

interface ViewProps {
	onClose: (state: any) => void;
}

const View: React.FC<ViewProps> = ({ onClose }: ViewProps) => {
	const navigate = useNavigate(); //路由跳转
	const [routerArr, setRouterArr] = useState<any[]>(routerList);
	// 跳转
	const goRouter = (item: any) => {
		if (item.children) {
			// router-展开
			setRouterArr(prevRouterList =>
				prevRouterList.map(i => {
					if (item.path === i.path && i.showState === false) {
						return { ...i, showState: true };
					} else {
						return { ...i, showState: false };
					}
				}),
			);
		} else {
			// 跳转
			if (item.linkState) {
				// router-link
				if (item.path) {
					navigate(item.path);
					onClose(false);
				}
			} else {
				// 外部-link
				if (item.path) {
					window.open(item.path, "_blank");
					onClose(false);
				}
			}
		}
	};

	useEffect(() => {
		//监听滚动条事件
		if (document.body && document.body.style) {
			if (document.body.style.overflow === "hidden") {
				return;
			}
			document.body.style.overflow = "hidden"; // 禁用页面滚动
		}
		return () => {
			document.body.style.overflow = ""; // 恢复页面滚动
		};
	}, []);

	return (
		<div className="fixed top-0 left-0 w-screen h-screen z-50 flex lg:hidden flex-col bg-bgcolor-100 ">
			<div className="h-full flex flex-col justify-between ">
				{/* logo */}
				<div className="flex justify-between items-center p-6 border-b border-white/20">
					<SimsportsLogo className="text-primary w-auto h-[38px] object-cover" />
					<button
						onClick={() => {
							onClose(false);
						}}
					>
						<IconClose className="size-5 text-white hover:text-primary" />
					</button>
				</div>
				{/* router */}
				<div className="flex-1 flex flex-col p-6 trove-scrollbar">
					{routerArr.map((item: any, index: React.Key | null | undefined) => {
						return (
							<div key={index}>
								<div
									className={`${!item.children && !item.path ? " hover:cursor-not-allowed " : " "} cursor-pointer group flex justify-between items-center px-4 py-2 rounded-lg hover:bg-white/10 `}
									onClick={() => {
										goRouter(item);
									}}
								>
									<span className={`${item.path ? " " : " text-text-100 "} text-lg `}>
										{item.name}
									</span>
									{item.children ? (
										<IconArrow
											className={`${item.showState ? "" : " rotate-0"} rotate-180 size-4 `}
										/>
									) : (
										<>{!item.linkState && <IconJump className="size-6" />}</>
									)}
								</div>
								{item.showState && (
									<>
										{item.children && (
											<div className="mx-2 mt-1">
												{item.children.map((t: any, i: React.Key | null | undefined) => {
													return (
														<div
															key={i}
															onClick={() => {
																goRouter(t);
															}}
															className={`${t.path ? "" : " hover:cursor-not-allowed text-text-100 "} flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-white/10 `}
														>
															<span>{t.name}</span>
															{!t.linkState && <IconJump className="size-6" />}
														</div>
													);
												})}
											</div>
										)}
									</>
								)}
							</div>
						);
					})}
				</div>
				{/* link-app */}
				<div className="border-t border-white/20 p-6 flex flex-wrap gap-4">
					<CommunityView />
				</div>
			</div>
		</div>
	);
};

export default View;
