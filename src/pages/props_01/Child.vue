<template>
    <div>
        <h3>子元件</h3>
        <h4>玩具: {{toy}}</h4>
        <h4>父給的車: {{car}}</h4>
        <button @click="sendToy(toy)">把玩具給父</button>
    </div>
</template>

<script setup lang="ts" name="Child">
import {ref} from 'vue'
// 變數
let toy = ref('robot')

// 接收 props
defineProps(['car','sendToy'])
</script>

<style>
</style>