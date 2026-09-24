<template>
    <h2>Details</h2>
    <ul>
        <li>編號: {{ id }}</li>
        <li>標題: {{ title }}</li>
        <li>內容: {{ content }}</li>
    </ul>
</template>

<script setup lang="ts" name="About">
defineProps(['id','title','content'])

</script>