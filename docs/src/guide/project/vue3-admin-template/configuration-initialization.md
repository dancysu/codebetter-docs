# 配置初始化

## 配置路径别名

**步骤1：安装 `@types/node`**

为了使 TypeScript 能够正确地为 Node.js 代码提供类型检查和自动补全功能，我们需要先安装 `@types/node`

```bash
pnpm add -D @types/node
```

-----

**步骤2：Vite 配置** (`vite.config.ts`)：

Vite 在构建（或开发服务器启动）时使用这些别名。这意味着它们影响的是最终打包的代码，以及在开发服务器中代码的实时重载。

```ts
import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	plugins: [vue()],
})
```

-----

**步骤3：TypeScript 配置** (`tsconfig.app.json`)：

TypeScript 在编译时使用这些别名。这意味着它们主要用于类型检查和编译 TypeScript 代码到 JavaScript，而不直接影响最终打包的代码。

```json
{
	"compilerOptions": {
		"baseUrl": "./",
		"paths": {
			"@/*": ["src/*"]
		}
	}
}
```

这样，你可以在项目中使用 `@` 别名来引用 `src` 目录下的文件，提高代码的可读性和维护性。
