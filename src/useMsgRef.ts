import { customRef } from "vue";

export default function(initvalue:string,delay:number){
    // 使用 vue customRef 定義響應式資料
    let timer:number
    // track 跟蹤、trigger 觸發
    let msg = customRef((track,trigger)=>{
        return{
            // msg 被讀取時回傳
            get(){
                track() // 目的:追蹤 msg
                return initvalue
            },
            // msg 被修改時回傳
            set(value){
                clearTimeout(timer)
                timer = setTimeout(()=>{
                    initvalue = value
                    trigger() // 當資料改變時，則通知 vue3 並觸發更新。
                     },delay) // delay:延遲
                    }
                }
            })
            return {msg}
        }