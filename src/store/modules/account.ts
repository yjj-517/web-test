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
				addresses: [], //绑定钱包账号
				agree_status: 1, //未同意协议/1未/2同意
				nickname: "", //用户名
				sdk_uid: "", //用户UID
				email: "", //email
				avatar: "", //头像地址
				avatarImg: "", //处理后的头像地址
			}, //用户信息
			// 登录成功存储用户信息
			addUser: (token: any, user: any) => {
				set((state: any) => ({
					userToken: token, //token
					userInfo: {
						...state.userInfo,
						...user, //登录用户信息
						avatarImg: import.meta.env.VITE_BASE_DOWNLOAD + "/" + user.avatar,
					},
				}));
			},
			// 重新获取用户信息
			editUser: (user: any) => {
				set((state: any) => ({
					userInfo: {
						...state.userInfo,
						...user, //登录用户信息
						avatarImg: import.meta.env.VITE_BASE_DOWNLOAD + "/" + user.avatar,
					},
				}));
			},
			// 退出删除用户信息
			delUser: () => {
				set((state: any) => ({
					userToken: "", //清空token
					userInfo: {
						...state.userInfo,
						addresses: [], //绑定钱包账号
						agree_status: 1, //未同意协议/1未/2同意
						nickname: "", //用户名
						sdk_uid: "", //用户UID
						email: "", //email
						avatar: "", //头像地址
						avatarImg: "", //处理后的头像地址
					}, // 将 userInfo 设置为空对象
				}));
			},
		}),
		{
			name: "sim-account01", // 存储的键名
			storage: createJSONStorage(() => localStorage), // 使用 localStorage 作为存储介质
		},
	),
);
