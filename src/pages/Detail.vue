<template>
    <h2>Details</h2>
    <ul>
        <li>編號: {{ route.params.id }}</li>
        <li>標題: {{ route.params.title }}</li>
        <li>內容: {{ route.params.content }}</li>
    </ul>
</template>

<script setup lang="ts" name="About">
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route)
</script>