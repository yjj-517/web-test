// src/i18n-provider.tsx
import React, { createContext, useContext } from "react";

type Messages = Record<string, any>;

// 预加载所有语言包
const modules = import.meta.glob<{ default: Messages }>("./lang/*.json", { eager: true });

// 提取 JSON 中的语言信息
interface LocaleInfo {
	name: string;
	type: string;
}

// 集合所有可用语言信息
export const availableLocales: LocaleInfo[] = Object.values(modules).map(mod => mod.default.lang);
// console.log(availableLocales);
// 构建 type 到 messages 的映射
const messagesMap: Record<string, Messages> = Object.values(modules).reduce(
	(acc, mod) => {
		const { lang } = mod.default;
		acc[lang.type] = mod.default;
		return acc;
	},
	{} as Record<string, Messages>,
);
// console.log(messagesMap);

// 获取当前语言：本地存储 → 浏览器语言 → 默认 en
const storedLocale = sessionStorage.getItem("locale");
// console.log(storedLocale);

let locale =
	storedLocale ??
	(() => {
		const navLang = navigator.language;
		return navLang ? navLang.split("-")[0] : "en";
	})();
// console.log(locale);

// 如果不存在对应语言，则回退到 en
if (!messagesMap[locale]) {
	locale = "en";
}
// 修改html标签语言
document.documentElement.lang = locale;

// 当前翻译内容
export const messagesLang = messagesMap[locale];
console.log(messagesLang);

// 创建 Context，默认值为 null，强制在 Provider 范围内使用
export const LangContext = createContext<Messages | null>(null);
// Provider 组件：将 messages 注入 Context
export const LangProvider: React.FC<React.PropsWithChildren<{ children: React.ReactNode }>> = ({
	children,
}) => <LangContext.Provider value={messagesLang}>{children}</LangContext.Provider>;

// 自定义 Hook：消费 Context，并校验是否在 Provider 内部使用
export const useLang = (): Messages => {
	const msgs = useContext(LangContext);
	if (!msgs) {
		throw new Error("useLang must be used within an useLang");
	}
	return msgs;
};

// 切换语言方法
export const switchLanguage = (lang: string): void => {
	sessionStorage.setItem("locale", lang);
	// 刷新页面以重新加载对应语言包
	window.location.reload();
};
