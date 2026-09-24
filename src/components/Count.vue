<template>
    <div>
        <h2>當前求和為: {{ sum }}</h2>

        <!-- 下拉選單:
             把選到的值存入 n  
         -->
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">減</button><br><br>
    </div>
</template>

<script setup lang="ts" name="Count">
import {ref} from 'vue'

let sum = ref(1) // 當前求和
let n = ref(1) // 使用者選擇的數字

function add(){
    sum.value += n.value
}
function minus(){
    sum.value -=n.value
}
</script>