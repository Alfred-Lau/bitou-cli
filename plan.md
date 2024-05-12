1. seo postcheck 的使用需要检查的事项

2. tsconfig.json 是在开发阶段使用，配置 baseUrl 和 paths，以及编译选项
3. rollup.config.js 是在打包阶段使用，配置打包的入口和出口，以及打包的插件，要配置 resolve.alias

官网研发栈的使用

cli
bitou create project-name
bitou new page page-name 【只要指的是双端适配的页面】
bitou new block block-name [主要指的是楼层]
bitou lint [检查本地代码规范]
bitou lint --fix [修复本地代码规范]
bitou seo --precheck [seo 预检查,主要检查可以不经过渲染的 seo 问题]
bitou seo --postcheck [seo 后检查,主要检查需要经过渲染的 seo 问题]

chrome-extension

- 可视化编辑内容，bitou-uiops 也可以使用

vsc-extension
