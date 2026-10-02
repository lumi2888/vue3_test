<template>
    <div>
        <h3>子元件1</h3>
        <h4>玩具: {{ toy }}</h4>
        <h4>書籍: {{ book }} 本</h4>
        <button @click="minusHouse($parent)">減少父的房產</button>
        <h4></h4><br>
    </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue';

// 資料
let toy = ref('玩具車')
let book = ref(3)

// 方法
function minusHouse(parent:any) {
    //console.log(parent)
    parent.house -= 1
}

// 資料傳給外部
defineExpose({toy,book})
</script>

<style>
</style>
