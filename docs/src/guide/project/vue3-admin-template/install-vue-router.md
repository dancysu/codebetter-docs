# 安装vue-router

-----

**步骤 1：安装 Vue Router**

首先，你需要为你的 Vue 项目安装 Vue Router。使用以下命令添加 Vue Router 依赖：

```bash
pnpm add vue-router@4
```

-----

**步骤 2：创建路由配置文件**

在项目根目录下创建 `router` 文件夹，并在其中创建两个文件：`index.ts` 和 `routes.ts`。`index.ts` 将用于创建和导出路由实例，而 `routes.ts` 将定义路由规则。

:::code-group

```ts [index.ts]
import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes.ts"

export const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
})
```
```ts [routes.ts]
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "home",
		component: () => import("../pages/home/index.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../pages/login/index.vue"),
	},
]

export default routes
```
```ts [自动生成一级路由（可选）]
const pages = import.meta.glob('../pages/**/meta.ts', {
  eager: true,
  import: 'default'
})

const pageComponents = import.meta.glob('../pages/**/index.vue')

const createRoute = ([filePath, config]: [string, unknown]) => {
  const path = filePath.replace('../pages', '').replace('/meta.ts', '')
  const name = path.split('./').filter(Boolean).join('-') || 'index'
  const componentPath = filePath.replace('meta.ts', 'index.vue')

  return {
    path,
    name,
    component: pageComponents[componentPath],
    meta: config
  }
}

const routes = Object.entries(pages).map(createRoute)

export default routes
```

:::

-----

**步骤 3：设置捕获路由**

在 `routes.ts` 中添加一个捕获所有未匹配路由的 404 页面：

```ts
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "home",
		component: () => import("../pages/home/index.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../pages/login/index.vue"),
	},
	{  // [!code focus]// [!code ++]
		path: "/:pathMatch(.*)*", // [!code focus]// [!code ++]
		name: "NotFound", // [!code focus]// [!code ++]
		component: () => import("../pages/error/404.vue"), // [!code focus]// [!code ++]
	}, // [!code focus]// [!code ++]
] 

export default routes
```

-----

**步骤 4：设置滚动行为**

在 `index.ts` 中配置路由的滚动行为，使其在路由跳转后滚动到页面顶部：

```ts
import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes.ts"

export const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior() { // [!code focus]// [!code ++]
		return { // [!code focus]// [!code ++]
			left: 0, // [!code focus]// [!code ++]
			top: 0, // [!code focus]// [!code ++]
		} // [!code focus]// [!code ++]
	}, // [!code focus]// [!code ++]
})
```
-----
**步骤 5：在 `main.ts` 中注册路由**

在你的项目入口文件 `main.ts` 中引入并注册路由：

```ts
// core
import { createApp } from "vue"
import { router } from "./router" // [!code focus]// [!code ++]
import App from "./App.vue"

// 创建应用实例
const app = createApp(App)

// 注册路由 // [!code focus]// [!code ++]
app.use(router) // [!code focus]// [!code ++]

// 路由准备就绪后挂载应用 // [!code focus]// [!code ++]
router.isReady().then(() => { // [!code focus]// [!code ++]
	app.mount("#app") // [!code focus]// [!code ++]
}) // [!code focus]// [!code ++]
```
