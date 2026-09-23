<template>
    <div class="news">
        <!--說明嵌套路由的概念-->
        <!--導航區-->
        <ul>
            <li v-for="news in newlist" :key="news.id">
            <!--params 參數值-->

            <!-- 方法一 -->
            <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->

            <!-- 方法二 -->
             <RouterLink
             :to="{
                name:'lulu',
                params:{
                    id:news.id,
                    title:news.title,
                    content:news.content, // 如果不需要此內容，註解後，需在 params 的路由規則參數後加上?
                }
             }"
             >
             {{ news.title }}
            </RouterLink>
            </li>
        </ul>
        <!--展示區-->
        <div>
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts" name="News">
import {reactive} from 'vue'
import {RouterView,RouterLink} from 'vue-router'

const newlist = reactive([
    {id:'asfdtrfay01',title:'food',content:'fish'},
    {id:'asfdtrfay02',title:'plant',content:'flower'},
    {id:'asfdtrfay03',title:'weather',content:'rain'},
    {id:'asfdtrfay04',title:'product',content:'phone'}
])
</script>

<!--註:
    // 路由 query 參數
     <RouterLink to="/news/detail?a=哈哈&b=你好&c=好的">{{ news.title }}</RouterLink>
-->