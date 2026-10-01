/* import {defineStore} from 'pinia'
import axios from 'axios'
import {nanoid} from 'nanoid'

export const useTalkStore = defineStore('talk',{
    actions:{
       async getATalk(){
            // 發送 request
            let result = await axios.get('https://dummyjson.com/quotes/random')
            // response 的字串(nanoid)，整理為一個物件
            let obj = {id:nanoid(),title:result.data.quote} // quote: F12 查該欄位名稱
            // 放到陣列中
            this.newList.unshift(obj) // unshift:新增資料到陣列最前面 
        }
    },
    // state:狀態 真正儲存數據的地方
    state(){
        return{
            newList:JSON.parse(localStorage.getItem('newList') as string) || []
        }
    }
})

註: pinia有多個概念 -> 其一:state -> 專屬類別:count
*/

import { nanoid } from "nanoid"
import {reactive} from "vue"
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTalkStore = defineStore('talk',()=>{
    // newList 是 state
    const newList = reactive(
        JSON.parse(localStorage.getItem('newList') as string) || []
    )

    // getATalk函數相當於 action
    async function getATalk(){
        let {data:{quote:title}} = await axios.get('https://dummyjson.com/quotes/random')
        let obj = {id:nanoid(),title}
        newList.unshift(obj)
    }
    return {newList,getATalk}
})