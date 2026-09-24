<!--子組件-->
<template>
    <div class="practice">
      <h2>當前求和為:{{sum}},放大10背後{{bigsum}}</h2>
      <button @click="add">sum+1</button><br><br>
      <!--dog:圖片網址 index:目前索引位置-->
      <img v-for="(dog,index) in dogList" :src="dog" :key="index">
      <button @click="getdog">dog+</button><br><br>
    </div>
</template>

<script lang="ts" setup name="Practice">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

const {sum,add,bigsum} = useSum()
const {dogList, getdog} = useDog()

</script>

<style>
img{
   height: 100px;
   margin-right: 10px;
}
</style>