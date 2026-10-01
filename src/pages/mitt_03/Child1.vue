<template>
    <div>
        <h3>子元件1</h3>
        <h4>玩具 : {{toy}}</h4>
        <button @click="emitter.emit('send-toy',toy)">玩具交由 Child2</button>
    </div>
</template>

<script setup lang="ts" name="Child1">
import emitter from '@/utils/emitter';
import {ref} from 'vue'
// 資料
let toy = ref('robot')
</script>

<style>
</style>