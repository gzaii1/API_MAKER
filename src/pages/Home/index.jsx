import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {HomeActions} from '@actions'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import { HomeStyles } from '@styles'
import { getI18n } from '@i18n'
import { globalEvent, debounce } from '@utils'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
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

/* 主页布局 */
const Home = withStyles(HomeStyles)(({classes}) =>{
    const dispatch = useDispatch()
    const datas = [{url:'xxxxxxxxxxxxxxx'}, {url:'xxx2'}]
    useEffect(()=>{
        const Alex = {
            name:'alex',
            age: 18
        }
        dispatch(HomeActions.createUser(Alex))
    }, [])

return <div className={classes.root}>
    <ApiConfig>
        <Tabs dataMap={datas}></Tabs>
        <InputLabel />
        <InputArea />
    </ApiConfig>
    {/* <Tooltip label='POST' defaultSelect='get' dataList={lst}/> */}
</div>
})

export default Home