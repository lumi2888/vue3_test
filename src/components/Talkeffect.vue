<template>
    <div>
        <button @click="getFruit">get</button>
        <ul>
            <li v-for="item in newList" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>

</template>

<script setup lang="ts" name="Effect">
import {useTalkStore} from '@/store/talkeffect'
import { storeToRefs } from 'pinia'

const talkStore = useTalkStore()
const {newList} = storeToRefs(talkStore)
// $subscribe:監視 Store 資料有無發生變化
talkStore.$subscribe((mutate,state)=>{
    console.log('talkStore裡面保存數據發生變化',mutate,state)
    localStorage.setItem('newList',JSON.stringify(state.newList))
})

// 方法
function getFruit(){
    talkStore.getATalk()
}
</script>

<style scoped>

</style>