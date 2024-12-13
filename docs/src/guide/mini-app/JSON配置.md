# 配置文件

JSON是一种轻量级的数据格式，常用于前后端数据的交互，但是在小程序中，JSON扮演着配置项的角色，用于配置项目或者页面属性和行为，每个页面或组件也都有一个对象的 json 文件。



### 小程序配置文件

`app.json` 是当前小程序的全局配置文件，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等。

当小程序启动时，会自动读取 `app.json` 文件中的配置，根据配置生成对应的页面和组件、界面表现、网络超时时间、底部 tab等，**`app.json` 在小程序运行过程中起着关键的作用**。

```json
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Weixin",
    "navigationBarTextStyle":"black"
  }
}
```

:::details pages

[pages](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#pages)用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。

**注意事项：**

1. 文件名不需要写文件后缀，框架会自动去寻找对应位置的 `.json`, `.js`, `.wxml`, `.wxss` 四个文件进行处理。
2. **小程序中新增/减少页面，都需要对 pages 数组进行修改。**
3. 未指定 `entryPagePath` 时，数组的第一项代表小程序的初始页面（首页）。

:::

:::details window

[window](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window)字段： 用于设置小程序的状态栏、导航条、标题、窗口背景色。

| 属性                         | 描述                                          | 类型     | 默认值   |
| :--------------------------- | :-------------------------------------------- | :------- | :------- |
| navigationBarBackgroundColor | 导航栏背景颜色                                | HexColor | \#000000 |
| navigationBarTextStyle       | 导航栏标题颜色，仅支持 `black` / `white`      | string   | white    |
| navigationBarTitleText       | 导航栏标题文字内容                            | string   |          |
| backgroundColor              | 下拉 loading 的样式，仅支持 `dark` / `light`  | string   | dark     |
| enablePullDownRefresh        | 是否开启全局的下拉刷新                        | boolean  | false    |
| onReachBottomDistance        | 页面上拉触底事件触发时距页面底部距离单位为 px | number   | 50       |

:::

:::details tabbar

[tabbar](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabBar)定义小程序顶部、底部tab栏，用以实现页面之间的快速切换。

**`tabBar` 配置项**

| 属性            | 描述                                                       | 类型     | 默认值 |
| :-------------- | :--------------------------------------------------------- | :------- | :----- |
| color           | tab 上的文字默认颜色，仅支持十六进制颜色                   | HexColor |        |
| selectedColor   | tab 上的文字选中时的颜色，仅支持十六进制颜色               | HexColor |        |
| backgroundColor | tab 的背景色，仅支持十六进制颜色                           | HexColor |        |
| borderStyle     | tabbar 上边框的颜色， 仅支持 `black` / `white`             | string   | black  |
| list            | tab 的列表，详见 `list` 属性说明，最少 2 个、最多 5 个 tab |          |        |
| position        | tabBar 的位置，仅支持 `bottom` / `top`                     | string   | bottom |

**List  配置项**：list 是一个数组，**只能配置最少 2 个、最多 5 个 tab**，tab 按数组的顺序排序，每个项都是一个对象。

| 属性             | 描述                                                         | 类型   | 是否必填 |
| :--------------- | :----------------------------------------------------------- | :----- | :------- |
| pagePath         | 页面路径，必须在 pages 中先定义                              | string | 是       |
| text             | tab 上按钮文字                                               | string | 是       |
| iconPath         | 图片路径，icon 大小限制为 40kb，<br />建议尺寸为 81px * 81px， | string | 是       |
| selectedIconPath | 选中时的图片路径，icon 大小限制为 40kb，<br />建议尺寸为 81px * 81px，不支持网络图片。 | string | 是       |

:::

### 页面配置文件

每一个小程序页面也可以使用同名 `.json` 文件来对本页面的窗口表现进行配置，页面中配置项会覆盖 `app.json` 的 `window` 中相同的配置项。

**页面配置文件的属性和 全局配置文件中的 window 属性几乎一致**

只不过这里不需要额外指定 window 字段，因此如果出现相同的配置项，页面中配置项 **会覆盖全局配置文件中相同的配置项**。

| 属性                         | 描述                                          | 类型     | 默认值   |
| :--------------------------- | :-------------------------------------------- | :------- | :------- |
| navigationBarBackgroundColor | 导航栏背景颜色                                | HexColor | \#000000 |
| navigationBarTextStyle       | 导航栏标题颜色，仅支持 `black` / `white`      | string   | white    |
| navigationBarTitleText       | 导航栏标题文字内容                            | string   |          |
| backgroundColor              | 下拉 loading 的样式，仅支持 `dark` / `light`  | string   | dark     |
| enablePullDownRefresh        | 是否开启全局的下拉刷新                        | boolean  | false    |
| onReachBottomDistance        | 页面上拉触底事件触发时距页面底部距离单位为 px | number   | 50       |



## 项目配置文件

在创建小程序项目时，根目录下会自动生成两个配置文件：`project.config.json` 和 `project.private.config.json`。这两个文件用于保存开发者工具中的个性化设置，以便在重新安装开发者工具或更换工作电脑时，能够快速恢复到之前的开发环境。

**配置文件功能**

- `project.config.json`：这是一个公共的项目配置文件，用于存储项目级别的通用设置。
- `project.private.config.json`：这是一个私有配置文件，用于存储个人特定的设置，其设置优先级高于`project.config.json`。

**注意事项**

- **版本控制排除**：建议将 `project.private.config.json` 文件添加到 `.gitignore` 中，以避免个人配置被错误地纳入版本管理，造成冲突。

- **编译相关设置**：任何与小程序最终编译结果相关的设置都必须放在 `project.config.json` 中，以确保这些设置在项目构建时被正确应用。

通过合理利用这两个配置文件，您可以确保项目设置的灵活性和安全性，同时保持个人工作习惯的私密性。



## sitemap.json

`sitemap.json` 是一个关键的配置文件，它决定了小程序及其各个页面是否能够被微信搜索引擎收录，从而增加小程序在搜索结果中的曝光率。

微信小程序现已支持内部搜索功能，开发者可以通过编辑 `sitemap.json` 文件来指定哪些页面可以被微信搜索引擎收录。当页面被设置为允许收录时，微信搜索引擎将通过爬虫技术为这些页面内容建立索引，使得用户在搜索相关内容时，小程序页面有机会出现在搜索结果中。



**注意事项**

- 如果项目中没有 `sitemap.json` 文件，微信将默认所有页面都是可以被索引的。
- 在 `sitemap.json` 文件中，未明确指定的页面将遵循最低优先级的默认规则，即默认允许微信索引。
