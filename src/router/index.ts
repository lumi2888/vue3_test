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
    history: createWebHashHistory(), // 路由器的工作模式
    routes: [ // 各自的路由規則
        {
            name: 'aaa',
            path: '/home',
            component: Home
        },
        {
            name: 'bbb',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'lulu',
                    path: 'detail/:id/:title/:content?', 
                    component: Detail,
                    
                    // 方法一:將 params 參數傳給路由組件，並透過 props 接收。
                    //props: true

                    //方法二:可自訂傳給路由組件的 props 資料(要對應該傳遞的模式)
                      props(route){
                        return route.params
                    }
                }
            ]
        },
        {
            name: 'ccc',
            path: '/about',
            component: About
        },
        // redirect:重定向
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

// 匯出 router
export default router