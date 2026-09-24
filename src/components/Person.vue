<template>
    <!--class 名稱，可用於設定 CSS 樣式-->
<div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年齡: {{ age }}</h2>
    <h2>地址: {{ address }}</h2>
    <button @click="changName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="showTel">查看聯繫方式</button>
  </div><br>
</template>

<!--使用 TypeScript 撰寫-->
<script lang="ts">
// 將元件設定提供給其他檔案使用
export default {
  name: 'Person',
  // option(配置式)API: data()、methods()...
  /*
  data() {
    return {
      // 設定資料屬性
      name: 'John Doe',
      age: 18,
      tel: '0912345678'
    }   
  },
  methods: {
    showTel() {
      alert(this.tel);
    },
    changName() {
      this.name = 'Jane Smith';
    },
    changeAge() {
      this.age += 1;
    }
  }
  */
 setup(){
  //setup 函數中的 this 是 undefined
  //資料
  let name = 'John Doe';
  let age = 18;
  let address = '台北市中正區';
  let tel = '0912345678';

  //方法
  function changName() {
    name = 'Jane Smith'; // name 的值有改變，但不是響應式資料
  }
  function changeAge() {
    age += 1;           // age 的值有改變，但不是響應式資料
  }
  function showAddress() {
    alert(address);
  }
  function showTel() {
    alert(tel);
  }
  // 資料、方法提供給 <template> 使用
  return {name, age, address, tel, changName, changeAge, showAddress, showTel}

/* 頁面返回值的內容，返回值可以是渲染函數
 return funcion(){
  return '你好'
     }
*/
    }
 }
</script>
<!--scoped:CSS 樣式只作用在目前這個 Vue 元件。 -->
<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px; /* 設定陰影效果: [水平方向偏移量] [垂直方向偏移量] [模糊程度] */
    border-radius: 10px; /* 設定圓角效果: [圓角半徑] */
    padding: 20px; /* 設定邊框與內容之間的距離: */
}
</style>