// 媒体链接

import { messagesLang } from "@/utils/language/index.tsx"; //lang
import IconLogo from "@/assets/imgs/logo/logo.svg";

// 主网链接
export const officialLink = {
	officialSite: {
		link: import.meta.env.VITE_OFFICIAL_SITE, //官网
		name: "simsports",
		icon: IconLogo,
	},
};

// 用户须知
export const userInformationData = {
	privacyPolicy: {
		name: messagesLang.userInformation.privacyPolicy,
		link: import.meta.env.VITE_OFFICIAL_SITE + "/privacy-policy",
	},
	termsOfUse: {
		name: messagesLang.userInformation.termsOfUse,
		link: import.meta.env.VITE_OFFICIAL_SITE + "/terms-of-use",
	},
};

// 社区链接
import IconChatgpt from "@/assets/imgs/layout/chatgpt.svg";
import IconDeepseek from "@/assets/imgs/layout/deepseek.svg";
import IconGithub from "@/assets/imgs/layout/github.svg";

// 社区链接
export const communityData = {
	chatgpt: {
		name: "ChatGPT",
		link: "https://chatgpt.com",
		icon: IconChatgpt,
	},
	deepseek: {
		name: "Deepseek",
		link: "https://www.deepseek.com",
		icon: IconDeepseek,
	},
	github: {
		name: "GitHub",
		link: "https://github.com",
		icon: IconGithub,
	},
};
