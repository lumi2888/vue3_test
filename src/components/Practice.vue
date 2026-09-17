<!--TS 介面規格約束-->
<template>
    <div class="practice">
       
    </div>
</template>

<script lang="ts" setup name="Practice">
import {type personinter,type persons} from '@/types'

// personinter 規格的 person 物件 - 單一物件
// let person:personinter = {id:'asyud7asfd01',name:'張三',age:60}

// 宣告 personlist，其資料型別必須符合 persons(多人列表) 的規格書要求 - 陣列物件
let personlist:persons = [
    {id:'asyud7asfd01',name:'張三',age:60},
    {id:'asyud7asfd02',name:'李四',age:18},
    {id:'asyud7asfd03',name:'王五',age:5},
]
</script>