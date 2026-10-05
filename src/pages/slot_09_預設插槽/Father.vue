<!-- slot:插槽 預設插槽 -->
<template>
    <div class="father">
        <h3>父元件</h3>
        <div class="content">
            <Category title="game list">
                <ul>
                    <li v-for="game in games" :key="game.id">{{ game.name }}</li>
                </ul>
            </Category>
            <Category title="food list">
                <img :src="imgurl" alt="">
            </Category>
            <Category title="movie list">
                <video :src="videourl" controls></video>
            </Category>
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
let imgurl = ref('https://images.pexels.com/photos/32744920/pexels-photo-32744920.jpeg')
let videourl = ref('https://www.pexels.com/zh-tw/download/video/38811850/')
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
img,video{
    width: 100%;
}
</style>

<!-- slot (插槽)：父元件將內容放入子元件預留的位置
三種類型：
1. 預設插槽：只有一個插槽，直接使用 <slot>。
2. 具名插槽：有多個插槽，用 name 指定不同位置。
3. 作用域插槽：子元件將資料提供給父元件，父元件決定如何顯示。 -->