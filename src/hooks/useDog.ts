import {reactive,onMounted} from 'vue'
import axios from 'axios'

// 匯出函式，使其他檔案可使用
export default function(){

    // 數據
    let dogList = reactive([
   'https://images.dog.ceo/breeds/retriever-golden/n02099601_3360.jpg'
])

// 方法
async function getdog(){

  let result = await axios.get(' https://dog.ceo/api/breeds/image/random')
  //console.log(result.data)
  dogList.push(result.data.message)
   }

   // 鉤子
   onMounted(()=>{
      getdog()
   })

   // 向外部提供東西
   return {dogList,getdog}
}


// dogList網址: https://dog.ceo/api/breeds/image/random

/* async: 非同步，用來處理「需要等待結果」的工作，例如 API、網路請求
   await：等待非同步操作完成後，再繼續執行
   使用 axios 發送 GET 請求取得
*/