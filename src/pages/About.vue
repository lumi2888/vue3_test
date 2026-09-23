<template>
    <div class="about">
        <h2>關於 vue3 路由基本切換效果</h2>
    </div>
</template>

<script setup lang="ts" name="About">
// 在導航區點擊時，About 默認卸載，有需要時才掛載
import { onMounted,onUnmounted } from 'vue';

onMounted(()=>{
    console.log('About 組件掛載')
})
onUnmounted(()=>{
    console.log('About 組件卸載')
})
</script>