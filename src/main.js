import './assets/main.css'

// createApp:建立應用
import { createApp } from 'vue'

// App:根組件
import App from './App.vue'

// App組件掛載到index.html(id為app的元素上)
createApp(App).mount('#app')

/*註:
 * 每個 Vue 應用程式都會有一個根組件（Root Component）
   且根組件可包含多個子組件（Child Component）
 */