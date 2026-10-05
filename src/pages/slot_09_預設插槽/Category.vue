<!-- 子元件 -->
<template>
<div class="category">
    <h2>{{ title }}</h2>
    <!-- 插槽:當父元件傳入內容時，會顯示在這裡 -->
     <!-- 如果未傳，則顯示預設內容 -->
    <slot>預設內容</slot>
</div>
</template>

<script setup lang="ts" name="Category">
defineProps(['title'])
</script>

<style scoped>
.category{
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
    width: 200px;
    height: 300px;
}
h2{
    background-color: bisque;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
}
</style>
<!-- font-weight:文字加粗 -->