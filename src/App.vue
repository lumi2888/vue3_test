
<!--setup:自動處理元件設定-->
<script setup name="App"> // name 不寫時則為預設名
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Person from './components/Person.vue'
import Practice from './components/Practice.vue'

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
