//api接口统一管理
import service from "../index";

// 获取单个轮播图配置
export const getRawConfig = async (config_id: string) =>
	await service({
		url: `/raw-config/${config_id}`,
		method: "get",
	});
