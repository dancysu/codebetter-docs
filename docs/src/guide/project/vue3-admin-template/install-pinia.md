# 安装 Pinia

-----

**步骤 1：安装 Pinia**

Pinia 是 Vue 应用的官方状态管理库，用于替代 Vuex。使用以下命令添加 Pinia 依赖：

```bash
pnpm add pinia
```

-----

**步骤 2：创建 Pinia 实例**

在项目根目录下创建 `pinia` 文件夹，并在其中新建 `index.ts` 文件来创建 `Pinia` 实例：

```ts
import { createPinia } from "pinia"
export const pinia = createPinia()
```

----

**步骤 3：创建状态存储**

在 `pinia/stores` 文件夹下新建 `counter.ts` 文件来定义一个状态存储：

```ts
import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", () => {
	const count = ref(0)
	const doubleCount = computed(() => count.value * 2)
	function increment() {
		count.value++
	}

	return { count, doubleCount, increment }
})
```

----

**步骤 4：在项目中注册 Pinia**

在 `main.ts` 文件中引入并注册 `Pinia` 实例：

```ts
// core
import { createApp } from "vue"
import { router } from "@/router"
import { pinia } from "@/pinia" // [!code focus]// [!code ++]
import App from "./App.vue"

// 创建应用实例
const app = createApp(App)

// 挂载路由和状态管理 // [!code focus]// [!code ++]
app.use(router).use(pinia) // [!code focus]// [!code ++]

// router 准备就绪后挂载应用
router.isReady().then(() => {
	app.mount("#app")
})
```

----

**步骤 5：在组件中使用 Pinia**

在 Vue 组件中使用 `counter` store：

```vue
<template>
	<div>
		<p>Count: {{ store.count }}</p>
		<p>Double Count: {{ store.doubleCount }}</p>
		<button @click="store.increment">Increment</button>
	</div>
</template>

<script setup>
import { useCounterStore } from "@/pinia/stores/counter"

// 使用 Pinia store
const store = useCounterStore()
</script>
```

通过这些步骤，你可以在 Vue 组件中轻松管理状态。
