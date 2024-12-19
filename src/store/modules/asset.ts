import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware"; //本地储存
/*
name：一个字符串，必传项，该store的唯一id。
persist-options：一个对象，store的配置项，比如配置store内的数据，修改数据的方法等等。
*/
/*
set 函数： 用于更新状态。
get 函数： 用于获取当前状态。
*/

export const assetStores = create<any>()(set => ({
	collectionModalState: false, //collection-modal-弹窗
	setCollectionModalState: (state: boolean) => set({ collectionModalState: state }), //修改弹窗
}));
