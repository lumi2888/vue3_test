<!-- 子元件 -->
<template>
    <!-- $event.target.value:頁面輸入框的值 -->
    <input type = "text" :value="modelValue" @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)"/>
</template>

<script setup lang="ts" name="qwerInput">
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
</style>

<!--註:
    原生事件：
    $event: 事件本身，可使用 $event.target 取得觸發事件的元素。
    自訂事件：
    $event: 觸發事件時傳過來的資料，不可使用 $event.target。
 -->