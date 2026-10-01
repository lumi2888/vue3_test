<template>
    <div>
        <h3>子元件</h3>
        <h4>玩具:{{toy}}</h4>
        <button @click="emit('send-toy',toy)">測試</button>
    </div>
</template>

<script setup lang="ts" name="Child">
import {ref} from 'vue'

// 資料
let toy = ref('robot')

const emit = defineEmits(['send-toy'])

</script>

<style>
</style>