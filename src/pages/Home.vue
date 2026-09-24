<!--編程式路由導航 
目的: 不用 <RouterLink> 實現路由跳轉
-->
<template>
    <div class="home">
        <img src="C:\Users\ITS_Intern\Desktop\vue3-test\src\components\image\GitHub.jpg" alt="">
    </div>
</template>

<script setup lang="ts" name="Home">
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
 /* onMounted(()=>{
    setTimeout(()=>{
        // 在此處編寫代碼，讓路由可跳轉
        // 編程式路由導航使用頻率 > <router-link>
        router.replace('/news')
    },3000)
}) */
</script>

<style>
.home{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>

<!--註:
    router:可切換到另一個路由頁面
    方法:
    1.push():新增一筆歷史紀錄，返回會回到上一頁。
    2.replace():取代目前的歷史紀錄，返回時不會回到已被取代的頁面。
-->