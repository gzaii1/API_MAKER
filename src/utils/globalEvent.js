/* 
    处理全局的点击事件 
*/
export function globalEvent(eventType, func, delay, ...args){
    const argLst = Array.prototype.slice.call(arguments)
    console.log(`argLst`, argLst)

    const eventTypeLst = ['click', 'mousedown', 'doubleclick']
    if(argLst.length <= 1){
        console.error(`clickEvent函数至少需要2个参数:
        1: 触发的事件类型;
        2: 要触发的事件;
        3: 触发的延时(若为0则变为同步)
        4 ~ n: (可选)参数列表
        `)
    }else if(typeof eventType!== 'string'){
        console.error(`clickEvent第一个参数eventType只能是string类型!`)
    }else if(!eventTypeLst.includes(eventType)){
        console.error(`eventType只能是一下类型的一种:
            1.click_other_areas (点击区域外触发)
            2.xxx
        `)
    }else if(Object.prototype.toString.call(func)!== '[object Function]'){
        console.error(`func参数只能为函数对象!`)
    }else if(isNaN(parseFloat(delay))){
        console.error(`请输入数字`)
    }else{
        let handler = function(){
            delay?
            setTimeout(()=>{
                func(...args)
            }, delay) 
            :
            func(...args)
            console.log('绑定了事件')            
            if(handler){
                window.removeEventListener(eventType, handler, false)
                handler = null
            }
        }
        setTimeout(()=>{
            console.log('添加事件')
            window.addEventListener(eventType, handler, false)
            console.log('设置了',globalEvent.prototype._lastNode)
            // oldDom = dom
        })
    }
}

globalEvent.prototype._lastNode = ''
// export const globalEvent =  debounce(globalEventFunc, 1000)
// export {globalEvent: debounce(globalEventFunc, 100)}
