<!-- 子元件 -->
<template>
<div class="category">
    <!-- 插槽s1,插槽s2 -->
    <slot name="s1">預設內容1</slot>
    <slot name="s2">預設內容2</slot>
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