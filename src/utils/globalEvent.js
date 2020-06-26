/* 
    处理全局的点击事件 
    注: 该方法仍不完善
*/
export function globalEvent(eventType){
    // 标识是否为首次触发.
    let isFirst = true
    // 第二次调用方法
    let func = function(){}
    // 第二次调用(即全局监听触发时)的参数.
    let props = null
    // 监听事件触发
    const handler = function(){
        func(props)
        // 重置为首次触发状态
        isFirst = true
        // 解除监听
        window.removeEventListener(eventType, handler, false)
    }
    
    // 参数1: 需要托管的函数
    // 参数2: 第一次触发时的参数
    // 参数3: 第二次触发时的参数
    return function(priFunc, oldProps, nextProps){
        if(isFirst){
            priFunc(oldProps)
            func = priFunc
            props = nextProps
            // 确保添加事件在下个event loop中执行(否则会立即触发handler), 延时0ms即可.
            setTimeout(()=>window.addEventListener(eventType, handler, false))
        }
        // 确保如果再次触发该事件时, 无效该操作(如连续点击同一按钮)
        isFirst = false
    }
}
