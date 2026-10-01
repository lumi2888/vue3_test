<!-- 元件溝通方式 props -->
<template>
    <div>
        <h3>父元件</h3>
        <Child1/>
        <Child2/>
    </div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'

</script>

<style>
</style>