// 定義一個 interface(介面)，用於限制 person 對象的具體屬性
// 匯出 personinter 的規格書
export interface personinter {
    id:string,
    name:string,
    age:number
}
// 一個自訂義類型
//export type persons = Array<personinter>
  export type persons = personinter[]