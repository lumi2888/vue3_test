<template>
    <div class="game">
        <h2>game list</h2>
        <!--作用域插槽:有具名和不具名(刪除 name="qwe") -->
        <slot name="qwe" :game="games" x="hi" y="welcome"></slot>
    </div>
</template>

<script setup lang="ts" name="Game">
import {reactive} from 'vue'
let games = reactive([
    {id:1, name:'game1'},
    {id:2, name:'game2'},
    {id:3, name:'game3'},
    {id:4, name:'game4'}
])
</script>

<style scoped>
.game{
    width: 200px;
    height: 300px;
    background-color: lightblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
h2{
    background-color: rgb(235, 196, 124);
    text-align: center;
    font-size: 20px;
    font-weight: 800;
}
</style>