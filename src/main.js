import './assets/main.css'

// createApp:建立應用
import { createApp } from 'vue'

// App:根組件
import App from './App.vue'

// 引入路由器
import router from './router'

// App組件掛載到index.html(id為app的元素上)
//createApp(App).mount('#app')
// 建立一個應用
const app = createApp(App)

// 使用路由器
app.use(router)

//掛載整個應用到 app 容器中
app.mount('#app')

/*註:
 * 每個 Vue 應用程式都會有一個根組件（Root Component）
   且根組件可包含多個子組件（Child Component）
 */