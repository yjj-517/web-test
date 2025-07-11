// router-list
export const routerList = [
	{
		name: "Home", //name
		path: "/home", //path
		linkState: true, //内部路由-true,反之
		showState: false, //展开路由-高亮处理
	},
	{
		name: "GAMES",
		path: "/games",
		linkState: true,
		showState: false,
		children: [
			{
				name: "AAAA",
				path: "/games/AAAA",
				linkState: true,
			},
			{
				name: "BBBB",
				path: "/aaaa",
				linkState: false,
			},
			{
				name: "CCC",
				path: "",
				linkState: true,
			},
		],
	},
	{
		name: "BBBB",
		path: "/store",
		linkState: true,
		showState: false,
	},
	{
		name: "AAAA",
		path: "",
		linkState: true,
		showState: false,
	},
];
