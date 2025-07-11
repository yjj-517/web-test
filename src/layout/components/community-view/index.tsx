// layout
import React, { useState } from "react";

import { officialLink, communityData } from "@/utils/public/medialink"; //medialink

const View: React.FC = () => {
	const [communityList] = useState<any[]>([
		{
			title: officialLink.officialSite.name,
			icon: officialLink.officialSite.icon,
			arrLink: [{ link: officialLink.officialSite.link, name: officialLink.officialSite.name }],
		},
		{
			title: communityData.chatgpt.name,
			icon: communityData.chatgpt.icon,
			arrLink: [{ link: communityData.chatgpt.link, name: communityData.chatgpt.name }],
		},
		{
			title: communityData.deepseek.name,
			icon: communityData.deepseek.icon,
			arrLink: [{ link: communityData.deepseek.link, name: communityData.deepseek.name }],
		},
		{
			title: communityData.github.name,
			icon: communityData.github.icon,
			arrLink: [{ link: communityData.github.link, name: communityData.github.name }],
		},
	]);

	return (
		<>
			<div className="flex items-center gap-3 md:gap-6">
				{communityList.map((item, index) => {
					const commonStyles =
						"cursor-pointer min-w-[52px] h-[52px] flex justify-center items-center rounded-lg bg-primary hover:bg-regular";
					return (
						<div key={index} className="relative group">
							{item.arrLink.length === 1 ? (
								<a
									href={item.arrLink.length === 1 ? item.arrLink[0].link : "/"}
									target="_blank"
									rel="nofollow noopener noreferrer"
								>
									<div className={commonStyles}>
										<img src={item.icon} className="size-8 animate-rotateY-360 " />
									</div>
								</a>
							) : item.arrLink.length > 1 ? (
								<>
									<div className={commonStyles}>
										<img src={item.icon} className="size-8 animate-rotateY-360" />
									</div>
									<div className="pb-1 hidden group-hover:block absolute bottom-full left-1/2 translate-x-[-50%]">
										<div className="bg-black/40 backdrop-blur-lg rounded-sm px-2 py-3 flex flex-col justify-center items-center gap-2">
											{item.arrLink.map((t: any, i: React.Key | null | undefined) => (
												<a
													href={t.link}
													target="_blank"
													rel="nofollow noopener noreferrer"
													key={i}
													className="text-xs hover:text-primary"
												>
													{t.name}
												</a>
											))}
										</div>
									</div>
								</>
							) : (
								<></>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default View;
