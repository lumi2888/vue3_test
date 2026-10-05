<!-- slot:插槽 具名插槽 -->
<template>
    <div class="father">
        <h3>父元件</h3>
        <div class="content">
            <Category>
                <template v-slot:s2>
                    <ul>
                        <li v-for="game in games" :key="game.id">{{ game.name }}</li>
                    </ul>
                </template>
                <template v-solt:s1>
                    <h2>game list</h2>
                </template>
            </Category>

            <Category>
                <!-- v-slot 可使用 #s2、#s1 代替 -->
                <template v-slot:s2>
                    <img :src="imgurl" alt="">
                </template>
                <template v-slot:s1>
                    <h2>game list</h2>
                </template>
            </Category>

            <Category title="movie list">
                  <template v-slot:s2>
                      <video :src="videourl" controls></video>
                </template>
                <template v-slot:s1>
                    <h2>game list</h2>
                </template>
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