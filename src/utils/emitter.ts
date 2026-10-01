// 引入 mitt
import mitt from 'mitt'

// 呼叫 mitt 函式，並取得 emitter，且 emitter 可綁定、觸發事件
const emitter = mitt()

// 綁定事件
emitter.on('test1',()=>{
    console.log('test1被呼叫了')
})
emitter.on('test2',()=>{
    console.log('test2被呼叫了')
})

// 觸發事件 2秒後觸發 test1、test2 事件
setTimeout(()=>{
    emitter.emit('test1')
    emitter.emit('test2')
},2000);

// 3秒後移除所有事件
setTimeout(()=>{
    //emitter.off('test1') 取消綁定 test1 事件
    //emitter.off('test2')
    emitter.all.clear()
},3000);

// 匯出 emitter
export default emitter