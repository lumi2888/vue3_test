<!-- slot:插槽 作用域插槽 -->
<template>
    <div class="father">
        <h3>父元件</h3>
        <div class="content">
            <Game>
                <!-- v-slot:qwe 具名，不具名則刪除 qwe -->
                <template v-slot:qwe="params">
                    <ul>
                        <li v-for="y in params.game">
                            {{ y.name }}
                        </li>
                    </ul>
                </template>
            </Game>

               <Game>
                <template v-slot:qwe="params">
                    <ol>
                        <li v-for="item in params.game">
                            {{ item.name }}
                        </li>
                    </ol>
                </template>
            </Game>

             <Game>
                <template v-slot:qwe={game}> <!--{}:解構 game-->
                    <h3 v-for="g in game" :key="g.id">{{ g.name }}</h3>
                </template>
            </Game>


        </div>
    </div>
</template>

<script setup lang="ts" name="Father">
import Game from './Game.vue'
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
/* img,video{
    width: 100%;
} */
</style>