<!-- slot:插槽 -->
<template>
    <div class="father">
        <h3>父元件</h3>
        <div class="content">
            <Category title="game list"/>
            <Category title="food list"/>
            <Category title="movie list"/>
        </div>
    </div>
</template>

<script setup lang="ts" name="Father">
import Category from './Category.vue';
import { ref,reactive } from 'vue';

let games = reactive([
    {id:1, name:'game1'},
    {id:2, name:'game2'},
    {id:3, name:'game3'},
    {id:4, name:'game4'}
])
let imgurl = 'https://images.unsplash.com/photo-1682685794700-1e3f5c7d8b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
let videourl = 'https://www.pexels.com/zh-tw/download/video/38811850/'
</script>

<style>
.father{
    background-color: linen;
    padding: 20px;
    border-radius: 10px;
}
.content{
    display: flex;
    justify-content: space-around;
}
</style>

<!-- slot (插槽)：父元件將內容放入子元件預留的位置
三種類型：
1. 預設插槽：只有一個插槽，直接使用 <slot>。
2. 具名插槽：有多個插槽，用 name 指定不同位置。
3. 作用域插槽：子元件將資料提供給父元件，父元件決定如何顯示。 -->