// <!-- change-lang-view -->
import React, { useState, useRef, useEffect } from "react";
import IconChangeLang from "@/assets/imgs/layout/change-lang.svg?react";

import { availableLocales, switchLanguage } from "@/utils/language/index.tsx"; //lang

const View: React.FC = () => {
	const [showBox, setShowBox] = useState(false); //切换页面

	const boxRef = useRef<HTMLDivElement>(null);
	// 点击外部时关闭
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
				setShowBox(false);
			}
		};
		if (showBox) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showBox]);
	return (
		<div className="w-full relative" ref={boxRef}>
			<button
				className="cursor-pointer p-2 rounded-md hover:bg-text-100/40"
				onClick={() => {
					setShowBox(!showBox);
				}}
			>
				<IconChangeLang />
			</button>
			{showBox && (
				<div className="absolute top-12 left-1/2 translate-x-[-50%]">
					<div className="bg-theme-bg p-3 rounded-lg border border-theme-text/10">
						{availableLocales.map((item: any, index: React.Key | null | undefined) => {
							return (
								<div
									key={index}
									onClick={() => {
										switchLanguage(item.type);
									}}
									className="cursor-pointer text-base flex justify-between items-center gap-6 py-2 px-4 rounded-md hover:bg-theme-text/10"
								>
									<span>{item.name}</span>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default View;
