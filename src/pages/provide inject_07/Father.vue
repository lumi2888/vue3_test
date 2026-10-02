<!-- 元件溝通方式 Provide inject -->
<template>
    <div>
        <h3>父元件</h3>
        <h4>金錢: {{money}}</h4>
        <h4>汽車: {{car.name}}, 價格: {{car.price}}</h4><br>
        <Child /> 
    </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import {ref,reactive,provide} from 'vue'

let money = ref(100)
let car = reactive({
    name:'BMW',
    price:1000000
})
// 孫傳祖
function updateMoney(value:number){
    money.value -= value
}

// 向孫元件提供資料 --provide('名稱', 需提供的資料)
provide('moneycontext',{money,updateMoney}) 
provide('car',car)

</script>

<style>
</style>

<!-- Provide inject: 可直接祖傳孫,孫傳祖。不需經過中間元件 -->