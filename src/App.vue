<script lang="ts" setup name="App">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Person from './components/Person.vue'
import Practice from './components/Practice.vue'
import {ref,onMounted} from 'vue'
import {RouterView,RouterLink} from 'vue-router'

// 一個效果
import Count from './components/Count.vue'
import Effect from './components/Talkeffect.vue'
import Father from './pages/slot_09/Father.vue'

onMounted(()=>{
   console.log('父--mount complete')
})

</script>

<template>
  <div class="app">
    <h2>Vue 路由測試</h2>

    <div class="navigate">
      <RouterLink to="/home">首頁</RouterLink>
      <RouterLink to="/news">新聞</RouterLink>
      <RouterLink replace :to="{path:'/about'}">關於</RouterLink>
    </div>

    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Father />
      <Person />
      <Practice />
      <Count />
      <Effect />
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
