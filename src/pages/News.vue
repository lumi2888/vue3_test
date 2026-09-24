<template>
    <div class="news">
        <!--導航區-->
        <ul>
            <li v-for="news in newlist" :key="news.id">
                <button @click="showNewsDetail(news)">查看新聞</button>
             <RouterLink
             :to="{
                name:'lulu',
                params:{
                    id:news.id,
                    title:news.title,
                    content:news.content,
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
import {RouterView,RouterLink,useRouter} from 'vue-router'

const newlist = reactive([
    {id:'asfdtrfay01',title:'food',content:'fish'},
    {id:'asfdtrfay02',title:'plant',content:'flower'},
    {id:'asfdtrfay03',title:'weather',content:'rain'},
    {id:'asfdtrfay04',title:'product',content:'phone'}
])

const router = useRouter()

interface NewsInter{
    id:string,
    title:string,
    content:string
}

function showNewsDetail(news:NewsInter){
    // 編程式路由導航
    router.push({
        name:'lulu',
        params:{
            id:news.id,
            title:news.title,
            content:news.content,
        }
    })
}

</script>