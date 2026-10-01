<!-- 元件溝通方式: custom event(自定義事件)子傳父 -->
<template>
    <div>
        <h3>父元件</h3>
        <h4 v-show="toy">子給的玩具:{{toy}}</h4>
        <!-- 給子組件綁定事件 -->
        <Child @send-toy="saveToy"/>
    </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import {ref} from 'vue'

// 資料
let toy = ref('')

// 用於儲存子元件傳遞過來的玩具
function saveToy(value:string){
    console.log('saveToy',value)
    toy.value = value
}
</script>

<style>
</style>
