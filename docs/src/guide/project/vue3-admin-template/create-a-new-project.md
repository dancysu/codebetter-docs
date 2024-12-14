# 创建新项目

-----

**步骤 1：创建新项目**

开始一个新的项目，我们使用 [Vite](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project) 来初始化。请在终端中执行以下命令：

```bash
pnpm create vite
```

-----

**步骤 2：配置项目**

在创建过程中，系统会提示您输入项目信息，请按照以下选项进行选择：

```
✔ Project name: … vue3-admin-template
✔ Select a framework: › Vue
✔ Select a variant: › TypeScript
```
----

**步骤3：进入项目并启动开发服务器**

完成项目配置后，进入您的新项目目录，并执行以下命令来安装依赖项并启动开发服务器：

```bash
cd vue3-admin-template
pnpm install
pnpm run dev
```

现在，您的项目环境已经搭建完成，可以开始开发了。

**步骤 4：初始化项目结构**

以下是推荐的项目结构，这样的结构可以帮助您更好地组织和管理项目中的不同部分，确保开发过程的高效和有序。

```bash
.
├─ public              # 静态资源目录，这些资源会被直接复制到构建输出目录
├─ mock                # mock目录，用于存放模拟数据和接口     
├─ src
│  ├─ common           # 公共代码和资源目录
│  │  ├─ apis          # API接口
│  │  ├─ assets        # 资源目录，包含图标、图片和样式文件等            
│  │  │  ├─ icons           
│  │  │  ├─ images          
│  │  │  └─ styles          
│  │  ├─ components    # 组件目录，用于存放可复用的组件       
│  │  ├─ constants     # 常量目录，用于存放项目中使用的常量         
│  │  ├─ hooks         # 钩子函数目录，用于存放自定义的钩子函数             
│  │  ├─ plugins       # 插件目录，用于存放项目中使用的插件           
│  │  ├─ types         # 类型定义目录，用于存放ts类型定义文件             
│  │  └─ utils         # 工具函数目录，用于存放项目中使用的工具函数             
│  ├─ http             # HTTP目录                       
│  ├─ layouts          # 布局目录，用于存放页面布局组件              
│  ├─ pages            # 页面目录，用于存放应用的各个页面                 
│  ├─ pinia            # 状态管理目录，用于存放Pinia的配置和相关代码                
│  ├─ router           # 路由目录，用于存放路由配置文件               
│  ├─ App.vue          # 应用的根组件              
│  └─ main.ts          # js入口文件，它负责初始化Vue实例及挂载DOM            
├─ index.html          # 应用入口文件
├─ package.json        # 项目的依赖管理和脚本配置文件
├─ README.md           # 项目说明文档
├─ tsconfig.app.json   # ts配置文件，用于配置应用的ts编译选项。
├─ tsconfig.json       # ts配置文件，用于配置整个项目的ts编译选项
├─ tsconfig.node.json  # ts配置文件，用于配置Node.js环境下的ts编译选项
└─ vite.config.ts      # Vite配置文件，用于配置Vite的构建和开发选项
```









