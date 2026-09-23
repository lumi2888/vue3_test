// 建立一個路由器，並匯出

//step1:引入 createRouter
import {createRouter,createWebHashHistory} from 'vue-router'

// 引入需要呈現的組件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

//step2:建立路由器
const router = createRouter({
    history:createWebHashHistory(), // 路由器的工作模式
    routes:[ // 各自的路由規則
        {
            name:'aaa',
            path:'/home', // 路徑名自訂
            component:Home
        },
        {
            name:'bbb',
            path:'/news',
            component:News,
            children:[
                {
                    // params 參數
                    name:'lulu',
                    path:'detail/:id/:title/:content?', // 設定 params 的路由規則
                    component:Detail
                }
            ]
        },
        {
            name:'ccc',
            path:'/about',
            component:About
        },
    ]
})

// 匯出 router
export default router