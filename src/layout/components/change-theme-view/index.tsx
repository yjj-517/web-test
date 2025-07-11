// <!-- change-theme-view -->
import React, { useState, useRef, useEffect } from "react";

import IconThemeLight from "@/assets/imgs/layout/icon-theme-light.svg?react";
import IconThemeDark from "@/assets/imgs/layout/icon-theme-dark.svg?react";
import IconThemeWarm from "@/assets/imgs/layout/icon-theme-warm.svg?react";

const View: React.FC = () => {
	const [showBox, setShowBox] = useState(false); //切换主题
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
	//
	const [themeArr] = useState([
		{
			type: "light",
			name: "Light",
			icon: IconThemeLight,
		},
		{
			type: "dark",
			name: "Dark",
			icon: IconThemeDark,
		},
		{
			type: "warm",
			name: "Warm",
			icon: IconThemeWarm,
		},
	]);
	const [theme, setTheme] = useState(() => {
		const storedTheme = sessionStorage.getItem("theme");
		if (storedTheme) return storedTheme;
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		return prefersDark ? "dark" : "light";
	});

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		sessionStorage.setItem("theme", theme);
	}, [theme]);
	const toggleTheme = (theme: string) => {
		setTheme(theme);
		sessionStorage.setItem("theme", theme);
	};

	return (
		<div className="relative w-full" ref={boxRef}>
			<button
				onClick={() => {
					setShowBox(!showBox);
				}}
				className="cursor-pointer p-2 rounded-md hover:bg-white/10"
			>
				{themeArr.map((item: any, index: React.Key | null | undefined) => {
					if (item.type === theme) {
						return <item.icon key={index} className="w-[20px] h-auto" />;
					}
					return null;
				})}
			</button>
			{showBox && (
				<div className="absolute top-[48px] left-1/2 translate-x-[-50%]">
					<div className="bg-bgcolor-100/20 p-3 rounded-lg border border-white/10">
						{themeArr.map((item: any, index: React.Key | null | undefined) => (
							<div
								key={index}
								onClick={() => {
									toggleTheme(item.type);
									setShowBox(!showBox);
								}}
								className="cursor-pointer text-base flex justify-between items-center gap-6 p-2 rounded-md hover:bg-white/10"
							>
								{/* <span>{item.name}</span> */}
								<item.icon className="w-[20px] h-auto" />
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default View;
