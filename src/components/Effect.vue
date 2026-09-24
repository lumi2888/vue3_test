<template>
    <div>
        <button @click="getFruit">get</button>
        <ul>
            <li v-for="item in newList" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>

</template>

<script setup lang="ts" name="Effect">
import {reactive} from 'vue'
import axios from "axios"; // 需先安裝 axios: npm i axios
import {nanoid} from 'nanoid'

let newList = reactive([
    {id:'ftrfasdf01',title:'葡萄'},
    {id:'ftrfasdf02',title:'草莓'},
    {id:'ftrfasdf03',title:'奇異果'},
])

async function getFruit(){
    // 發送 request
    let result = await axios.get('https://dummyjson.com/quotes/random')
    // response 的字串，整理為一個物件
    let obj = {id:nanoid(),title:result.data.quote} // quote: F12 查該欄位
    // 放到陣列中
    newList.unshift(obj) // unshift:新增資料到陣列最前面 
}
</script>

<style scoped>

</style>

<!-- 重點整理:
     . axios.get(...) 前端呼叫 API
     . result.data.quote 理解 API 回傳格式

     . 後端資料整理成前端需要的格式
       let obj = {
           id: nanoid(),
        title: result.data.quote
        }
     . reactive(...) 響應式資料更新
  -->