<template>
    <div>
        <h3>子元件2</h3>
        <h4>電腦 : {{computer}}</h4>
        <h4>Child1 給的玩具 : {{toy}}</h4>
    </div>
</template>

<script setup lang="ts" name="Child2">
import {ref,onUnmounted} from 'vue'
import emitter from '@/utils/emitter';

// 資料
let computer = ref('product')
let toy = ref('')

// 給 emitter 綁定 send-toy 事件，收到 Child1 傳來的 value 值。
emitter.on('send-toy',(value:any)=>{
    //console.log('send-toy')
    toy.value = value
})

// 在元件卸載時解綁 send-toy 事件。
// 目的:避免同一事件執行多次，導致重複觸發和記憶體浪費。
onUnmounted(()=>{
    emitter.off('send-toy')
})

</script>

<style>
</style>