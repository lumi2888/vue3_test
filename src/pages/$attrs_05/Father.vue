<!-- 元件溝通方式 $attrs -->
<template>
    <div>
        <h3>父元件</h3>
        <h4>a: {{ a }}</h4>
        <h4>b: {{ b }}</h4>
        <h4>c: {{ c }}</h4>
        <h4>d: {{ d }}</h4>

        <!-- 父元件把資料 a 傳給子元件 
         . :a  子元件接收的屬性名稱 a
         . "a" 父元件中的變數 a -->
        <Child :a="a" :b="b" :c="c" :d="d" :x="100" :y="200" :updateA="updateA"/> <!-- 在子元件尚未接收的情況下，可透過vue工具查看變化--> 
    </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from 'vue'

let a =ref(1)
let b =ref(2)
let c =ref(3)
let d =ref(4)

function updateA(value : number) {
    a.value += value
}

</script>

<style>
</style>
<!-- $attrs 可 祖傳孫:傳資料 孫傳祖:傳事件 -->