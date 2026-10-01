<template>
    <div>
        <h3>孫元件</h3>
        <h4>a: {{ a }}</h4>
        <h4>b: {{ b }}</h4>
        <h4>c: {{ c }}</h4>
        <h4>d: {{ d }}</h4>
        <h4>x: {{ x }}</h4>
        <h4>y: {{ y }}</h4>
        <button @click="updateA(6)">父元件的a被更新</button>
    </div>
</template>

<script setup lang="ts" name="GrandChild">
defineProps(['a', 'b', 'c', 'd', 'x', 'y', 'updateA'])
</script>

<style>
</style>