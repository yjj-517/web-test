// api.ts
// api接口统一管理
import service from "../index";
// import qs from "qs";

//以post请求为例--可单独设置请求标头--如请求头/时间/token
export const postAdd = (data: any) =>
	service({
		url: "/api", //直接放地址即可。
		method: "post", //请求类型
		timeout: 10000, //timeout
		headers: {
			"Content-Type": "application/json; charset=utf-8", //请求头
			Authorization: 123, //token
		},
		data: data, //请求传入数据
		// params: qs.stringify(data), //qs转化数据
	});

// get
export const getGet01 = async (params: any) =>
	await service({
		url: "/api/Get01",
		method: "get",
		params: params,
	});
export const getGet02 = async (id: any) =>
	await service({
		url: `/api/Get02/${id}`,
		method: "get",
	});

// post
export const postPost = async (data: any) =>
	await service({
		url: "/api/post",
		method: "post",
		data: data,
	});

// put
export const getPut01 = async (params: any) =>
	await service({
		url: "/api/Put01",
		method: "put",
		params: params,
	});
export const putPut02 = async (id: any, data: any) =>
	await service({
		url: `/api/Put02/${id}`,
		method: "put",
		data: data, // 更新的数据放在请求体中
	});

// delete
export const deleteDelete = async (id: any) =>
	await service({
		url: `/api/delete/${id}`,
		method: "delete",
	});
