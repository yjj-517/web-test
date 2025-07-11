// <!-- footer -->
import React, { useState } from "react";

import { useLang } from "@/utils/language/index.tsx"; //lang

import { userInformationData } from "@/utils/public/medialink"; //medialink
import CommunityView from "@/layout/components/community-view"; //communityList

const View: React.FC = () => {
	const [informationArr] = useState<any[]>([
		userInformationData.privacyPolicy,
		userInformationData.termsOfUse,
	]);
	const { layout } = useLang(); //lang
	return (
		<>
			<footer className="w-full h-full z-50">
				<section className="main py-10 border-t border-bgcolor-100">
					<div className="flex-center flex-col gap-4 text-center">
						<p>{layout.tagline}</p>
						<CommunityView />
						<div className="flex justify-between gap-4 text-sm">
							{informationArr.map((item, index) => (
								<a
									key={index}
									href={item.link}
									target="_blank"
									rel="nofollow noopener noreferrer"
									className="hover:underline"
								>
									{item.name}
								</a>
							))}
						</div>
						<p className="text-xs text-text-100">{layout.copyright}</p>
					</div>
				</section>
			</footer>
		</>
	);
};

export default View;
