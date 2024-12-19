//  接口调用
import axios from "axios";

const service = axios.create({
	baseURL: import.meta.env.VITE_BASE_API, // api 的 base_url
	timeout: 5000, // request timeout
	headers: {
		"Content-Type": "application/json; charset=utf-8", //请求头
	},
});

// 请求拦截
service.interceptors.request.use(
	(config: any) => {
		// const useStore = useStores();
		// if (useStore.userState) {
		// 	// 如果登录就携带token
		//  	config.headers["Authorization"] = "Bearer " + userToken;
		// }
		// console.log("config-->", config);
		return config;
	},
	(error: any) => {
		// console.log("error-->", error);
		return Promise.reject(error);
	},
);

// 响应拦截器
service.interceptors.response.use(
	response => {
		// console.log("response=>", response);
		// 对响应数据做点什么
		return response.data;
	},
	error => {
		// console.log("error-->", error);
		// 对响应错误做点什么
		return Promise.reject(error);
	},
);

export default service;
