

```bash
pnpm i -D vite-plugin-mock mockjs
```



```js
import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      viteMockServe({
        mockPath: 'mock',
        enable: true
      })
    ],
  }
})
```

