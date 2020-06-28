import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {HomeActions} from '@actions'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import { HomeStyles, LeftStyles } from '@styles'
import { getI18n } from '@i18n'
import { globalEvent, debounce } from '@utils'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import ChatIcon from '@material-ui/icons/Chat';
import { Tooltip } from '@components'

const i18n = getI18n('zhCN/components/Header')

// 负责托管一些全局监听的事件
const windowListener = globalEvent('click')

/* 顶部配置 */
const ApiConfig = withStyles(HomeStyles)(({classes, children}) =>{
    return <div className={classes.apiConfig}>{children}</div>
})

/* tab组 */
const Tabs = withStyles(HomeStyles)(({classes, dataMap}) =>{
    return <div className={classes.tabs}>
     { dataMap.map((data, idx)=> <Tab key={`tab${idx}`}> {data.url} </Tab>) }
    </div>
})

/* 单一tab */
const Tab = withStyles(HomeStyles)(({classes, children})=>{
    return <div className={classes.tab}>
            <div className={classes.tabLabel}>{children}</div>
        </div>
})

/* 输入栏提示 */
const InputLabel = withStyles(HomeStyles)(({classes, children})=>{
    return <div className={classes.iptLabel}>
            <div className={classes.iptLabelLeft}>请编辑您的接口:</div>
            <div className={classes.iptLabelRight}>XXXXXXXXXXXXX</div>
        </div>
})

/* 输入栏本体 */
const InputArea = withStyles(HomeStyles)(({classes, children})=>{
    const [typeCheck, setTypeCheck] = useState(false)
    
    return <div className={classes.iptArea}>
            <div className={classes.iptLeft}>
                <div className={classes.iptLeftBtn}>
                    <div 
                        className={classes.iptLeftBtnBox}
                        onClick={()=>{windowListener(setTypeCheck, true, false)}}
                    >
                        <b>选择</b>
                        {typeCheck?<ArrowDropUp />:<ArrowDropDown />}
                    </div>
                    
                    <div className={classes.iptTotal} style={{visibility: typeCheck? 'visible': 'hidden'}}>
                        <div>
                            <div className={classes.iptTotalLi}>post</div>
                            <div className={classes.iptTotalLi}>get</div>
                            <div className={classes.iptTotalLi}>push</div>
                        </div>
                    </div>
                </div>
                <div className={classes.iptLeftIpt}>
                    <input type="text" />
                </div>
            </div>
            <div className={classes.iptLabelRight}>
                <Button onClick={(e)=>{
                }}>保存</Button>
            </div>
        </div>
})

/* 设定返回体类型 */
const TypeArea = withStyles(HomeStyles)(({classes, children})=>{
    const [selected, setSelected] = useState('json')
    const typeLst = [
        {label:'JSON', value:'json'},
        {label:'websocket', value:'websocket'},
        {label:'上传文件', value:'update'},
        {label:'下载文件', value:'download'},
        {label:'excel导出', value:'excel'},
    ]

    return <div className={classes.typeArea}>
        <div className={classes.mainTabs}>
            {
                typeLst.map((select, idx)=>
                     <div key={`tab${idx}`} 
                     className={`${classes.oneTab} ${select.value === selected?classes.selected:''}`} 
                        onClick={()=>setSelected(select.value)}
                        >
                        <span className={classes.tabSpan}>{select.label}</span>
                    </div>)
            }

        </div>
        <div className={classes.chatIconBox}>
            <span className={classes.chatIconSpan}>意见反馈</span>
            <ChatIcon className={classes.chatIcon} />

        </div>

    </div>
}) 

/* 设定参数区域 */
const ParamsArea = withStyles(HomeStyles)(({classes})=>{
    return <div className={classes.paramsArea}>参数</div>
})

/* 主页布局 */
const Home = withStyles(HomeStyles)(({classes}) =>{
    const dispatch = useDispatch()
    const datas = [{url:'xxxxxxxxxxxxxxx'}, {url:'xxx2'}]

    useEffect(()=>{
        const Alex = {
            name:'alex',
            age: 18
        }
        // console.log('classes', )
        dispatch(HomeActions.createUser(Alex))
    }, [])

return <div className={classes.root}>
    <ApiConfig>
        <Tabs dataMap={datas}></Tabs>
        <InputLabel />
        <InputArea />
        <TypeArea>
        
        </TypeArea>
        <ParamsArea />
    </ApiConfig>
    {/* <Tooltip label='POST' defaultSelect='get' dataList={lst}/> */}
</div>
})

export default Home