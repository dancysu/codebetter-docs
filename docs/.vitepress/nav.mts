/**
 * @author 'Dancy'
 * @description '导航栏配置项'
 */

import { Nav } from "./type/nav.mts"

export const nav: Nav = [
	{ text: "首页", link: "/" },
	{ text: "HTML", link: "/guide/html/" },
	{ text: "CSS", link: "/guide/css/" },
	{ text: "JavaScript", link: "/guide/javascript/" },
	{ text: "TypeScript", link: "/guide/typescript/" },
	{ text: "Node", link: "/guide/node/" },
	{ text: "Vue", link: "/guide/vue/" },
	{ text: "React", link: "/guide/react/" },
	{ text: "小程序", link: "/guide/mini-app/" },
	{
		text: "开发手记",
		items: [
			{ text: "vue3-admin-template", link: "/guide/project/vue3-admin-template/" },
			{ text: "vue3-ui-library", link: "/guide/project/vue3-ui-library/" },
		],
	},
]
