<!-- 元件溝通方式 props -->
<template>
    <div>
        <h3>父元件</h3>
        <h4>汽車: {{car}}</h4>
        <!-- 按 button 後，才顯示 -->
        <h4 v-show="toy">子給的玩具: {{toy}}</h4>

        <!-- car 傳遞給子元件 -->
        <Child :car="car" :sendToy="getToy"/> 
    </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import {ref} from 'vue'

// 變數
let car = ref('Toyota')
// 此 toy 與子元件的 toy 不衝突
let toy = ref('')

// 方法
function getToy(value:string){
    //console.log('父',value)
    toy.value = value
}
</script>

<style>
</style>

<!--註:
    props: 父->子,子->父 
-->