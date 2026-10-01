<!-- 元件溝通方式 v-model -->
<template>
    <div>
        <h3>父元件</h3>
        <h4>{{ username }}</h4>

        <!-- v-model 用在 html 標籤上  -->
        <!-- input : <input type="text" v-model="username" /> -->

        <!-- username 雙向綁定:資料改變，頁面會自動更新，反之亦然。 -->
        <!-- input : <input :value="username" @input="username = (<HTMLInputElement>$event.target).value" type="text" /> -->
        
        <!-- v-model 用在元件標籤上-->
         <!-- v-model預設為modelValue(可省略)，可自訂v-model名稱，例如v-model:qwe -->
         <qwerInput v-model="username" />
         <!--  update:modelValue 為事件名稱(自訂) -->
         <!-- <qwerInput :modelValue="username" @update:modelValue="username = $event"/>

              註:
              . :modelValue="username" : 父 -> 子
              . @update:modelValue="username = $event" : 子 -> 父 -->
    </div>
</template>

<script setup lang="ts" name="Father">
import {ref} from 'vue';
import qwerInput from './qwerinput.vue';
// 資料
let username = ref('user')

</script>

<style>
</style>