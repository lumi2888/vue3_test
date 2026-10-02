<template>
    <div>
        <h3>孫元件</h3>
        <h4>金錢: {{money}}</h4>
        <h4>汽車: {{car.name}}, 價格: {{car.price}}</h4>
        <button @click="updateMoney(6)">更新父元件的金錢</button>
    </div>
</template>

<script setup lang="ts" name="Father">
import { inject } from 'vue' // inject:注入

// 注入父元件提供的資料(money--自訂名)
let {money,updateMoney} = inject('moneycontext',{money:0,updateMoney:(param:number)=>{}})

// 如找不到資料,顯示 {name:'未知',price:0}
// 注入父元件提供的資料(car--自訂名)
let car = inject('car',{name:'未知',price:0})

</script>

<style>
</style>