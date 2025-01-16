import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"; //本地储存
/*
name：一个字符串，必传项，该store的唯一id。
persist-options：一个对象，store的配置项，比如配置store内的数据，修改数据的方法等等。
*/
/*
set 函数： 用于更新状态。
get 函数： 用于获取当前状态。
*/

export const accountStores = create(
	persist<any>(
		set => ({
			userToken: "", //user-token
			userInfo: {
				nickname: "", //用户名
			}, //用户信息
			// 登录成功存储用户信息
			addUser: (token: any, user: any) => {
				set((state: any) => ({
					userToken: token, //token
					userInfo: {
						...state.userInfo,
						...user, //登录用户信息
					},
				}));
			},
		}),
		{
			name: "account01", // 存储的键名
			storage: createJSONStorage(() => localStorage), // 使用 localStorage 作为存储介质
		},
	),
);
