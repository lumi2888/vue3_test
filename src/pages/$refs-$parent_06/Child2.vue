<template>
    <div>
        <h3>子元件2</h3>
        <h4>電腦: {{ computer }}</h4>
        <h4>書籍: {{ book }} 本</h4>
    </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue';

// 資料
let computer = ref('product')
let book = ref(6)

defineExpose({computer,book})

</script>
<style>
</style>