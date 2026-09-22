// 建立一個路由器，並匯出

//step1:引入 createRouter
import {createRouter,createWebHashHistory} from 'vue-router'

// 引入需要呈現的組件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'

//step2:建立路由器
const router = createRouter({
    history:createWebHashHistory(), // 路由器的工作模式
    routes:[ // 各自的路由規則
        {
            path:'/home', // 路徑名自訂
            component:Home
        },
        {
            path:'/news',
            component:News
        },
        {
            path:'/about',
            component:About
        },
    ]
})

// 匯出 router
export default router