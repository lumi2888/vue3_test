<!--父組件-->
<!--setup:自動處理元件設定-->
<script lang="ts" setup name="App"> // name 不寫時則為預設名
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Person from './components/Person.vue'
import Practice from './components/Practice.vue'
import {ref,onMounted} from 'vue'
import {RouterView,RouterLink} from 'vue-router'

let isShow = ref(true) // 初始值為 true

onMounted(()=>{
   console.log('父--mount complete')
})

</script>

<!--寫 HTML 結構 Ex:顯示 Person 組件-->
<template>
  <div class="app">
    <h2>Vue 路由測試</h2>
    <!--導航區-->
    <div class="navigate">
      
      <!--to 字串寫法，直接指定要跳轉的路徑
         :to 物件寫法，可指定路徑且也能加其他路由資訊(name、query、params)
      -->
      <RouterLink to="/home">首頁</RouterLink>
      <RouterLink to="/news">新聞</RouterLink>
      <RouterLink :to="{path:'/about'}">關於</RouterLink>
    </div>

    <!--展示區: 此區可能會展示各種組件，但需看路徑。-->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Person />
      <Practice />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<!--寫 CSS 樣式-->
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
