import { defineUserConfig, defaultTheme } from 'vuepress'
import navbar from './config/navbar'
import sidebar from './config/sidebar'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '小桂子',
    description: '小桂子博客',
    // 向当前页面 html 注入 <head>
    head: [
        ['link',
            {
                rel: 'icon',
                href: '/images/logo.png'
            }]
    ],
    // 默认主题配置
    theme: defaultTheme({
        navbar,
        sidebar,
        sidebarDepth: 2
    }),
})
