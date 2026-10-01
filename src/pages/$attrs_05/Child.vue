<template>
    <div>
        <h3>子元件</h3>
        <GrandChild v-bind="$attrs"/>
    </div>
</template>

<script setup lang="ts" name="Child">
import GrandChild from './GrandChild.vue'
</script>

<style>
</style>

<!-- $attrs: 取得父元件傳入，但沒有被 props 接收的屬性。 -->