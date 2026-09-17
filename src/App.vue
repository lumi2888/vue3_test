<!--父組件-->
<!--setup:自動處理元件設定-->
<script lang="ts" setup name="App"> // name 不寫時則為預設名
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Person from './components/Person.vue'
import Practice from './components/Practice.vue'
import {reactive} from 'vue'
import {type  persons} from '@/types'

let personlist:persons = reactive([
  {id:'asudfysafd01',name:'張三',age:18},
  {id:'asudfysafd02',name:'李四',age:20},
  {id:'asudfysafd03',name:'王五',age:22},
])

console.log(personlist)
</script>

<!--寫 HTML 結構 Ex:顯示 Person 元件-->
<template>
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
