<!-- 元件溝通方式 $refs 和 $parent -->
<template>
    <div>
        <h3>父元件</h3>
        <h4>房產: {{house}}</h4>
        <button @click="changeToy">修改 Child1 的玩具</button><br>
        <button @click="changeComputer">修改 Child2 的電腦</button><br><br>
        <button @click="getAllChild($refs)">所有子元件的書增加</button>
        <Child1 ref="c1" />
        <Child2 ref="c2" />
    </div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import { ref } from 'vue';
let c1 = ref()
let c2 = ref()

// 資料
let house = ref(4)

// 方法
function changeToy() {
    //console.log(c1.value)
    c1.value.toy = '玩具熊'
}

function changeComputer() {
    //console.log(c2.value)
    c2.value.computer = 'notebook'
}

function getAllChild(refs:any) {
    for(let key in refs){
        refs[key].book += 3
    }
}
 // 向外部提供資料
defineExpose({house})
</script>

<style>
</style>

<!-- $refs:父傳子, $parent:子傳父 -->