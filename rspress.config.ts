// 配置文件
import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  // 文档根目录
  root: path.join(__dirname, 'docs'),
  
  // 部署基础路径
  base: '/',

  // 站点标题。
  title: 'CodeBetter',

  // 站点描述。
  description: 'CodeBetter文档站',

  // 站点图标。
  icon: '/logo/code_logo_light.svg',

  // 站点 logo。（这个路径将用作导航栏左上角的 logo 路径）
  logo: {
    light: '/logo/code_logo_light.svg',
    dark: '/logo/code_logo_dark.svg',
  },

  // 站点 logo 文字。（这个文字将用作导航栏左上角的 logo 文字）
  logoText: 'CodeBetter',

  // 自定义构建站点的输出目录。
  outDir: 'doc_build',

  // 是否开启图片放大功能。
  mediumZoom: true,

  // 搜索
  search: {
    codeBlocks: true,
  },

  // 主题配置
  themeConfig: {
    // 主页的页脚。
    footer: {
      message:
        '<div style="display:flex; justify-content: center; align-items: center">©2024 codebetter.cn 版权所有 <a href="https://beian.miit.gov.cn/" target="_blank" style="margin: 0 5px;">京ICP备2024098078号</a> <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11011402054456" rel="noreferrer" target="_blank" style="margin: 0 5px;display: flex;align-items: center;"><img src="/logo/gongan-icon.png" style="width: 16px;display: inline-block; margin-right: 5px;"/>京公网安备11011402054456</a><div>',
    },

    // 在右侧边栏中配置大纲的标题。
    outlineTitle: '目录',

    // 是否显示最后更新时间,默认情况下不显示。
    // lastUpdated: true,

    // 最后更新时间的文本。
    // lastUpdatedText: '最后更新时间',

    // 上一页的文本。
    prevPageText: '上一页',

    // 下一页的文本。
    nextPageText: '下一页',

    // 搜索框的占位符文本。
    searchPlaceholderText: '搜索文档',

    // 没有搜索结果时的显示文本。
    searchNoResultsText: '未搜索到相关结果',

    // 没有搜索结果时的建议查询提示文本。
    searchSuggestedQueryText: '可更换不同的关键字后重试',

    // 预览页/组件的配置项。
    overview: {
      filterNameText: '过滤',
      filterPlaceholderText: '输入关键词',
      filterNoResultText: '未找到匹配的 API:',
    },

    // 网站的社交链接
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/dancysu',
      },
    ],

    // 控制隐藏导航栏行为。
    hideNavbar: 'auto', // "always" | "auto" | "never"

    // 在页面切换的时候是否显示转场动画,使用 View Transition API 实现。
    enableContentAnimation: true,

    // 在浅色和深色主题之间切换时是否有动画效果,使用 View Transition API 实现。
    enableAppearanceAnimation: true,

    // 启用文档上的滚动到顶部按钮.
    enableScrollToTop: true,

    // 是否在文档标题未提供时将 frontmatter.title 作为后备内容。
    fallbackHeadingTitle: true
  },
  markdown: {
    showLineNumbers: true,
  },
});
