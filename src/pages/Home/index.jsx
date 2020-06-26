import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {HomeActions} from '@actions'
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import { HeadStyles } from '@styles'
import { getI18n } from '@i18n'
import { globalEvent, debounce } from '@utils'

const i18n = getI18n('zhCN/components/Header')

const HomeStyles = createStyles({
    root:{
        margin:'0'
    },
    apiConfig:{
       height:'8rem',
       width:'100%',
       background:'#FFFFFF',
    },
    tabs:{
        display:'flex',
        alignItems:'flex-end',
        height:'3rem',
        width:'100%',
        borderBottom:'1px solid #EAEAEA' 
    },
    tab:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'2rem',
        width:'90px',
        cursor:'pointer',
        margin:'0 5px 0 5px',
        color:'#808080',
        borderTopLeftRadius:'3px',
        borderTopRightRadius:'3px',
        borderTop:'1px solid #EAEAEA',
        borderLeft:'1px solid #EAEAEA',
        borderRight:'1px solid #EAEAEA',
        // overflow:'hidden',
        // padding:'0 5px 0 5px',
        '&:hover':{
            borderTop:'2.5px solid #f0753e',
            borderBottom:'2px solid #FAFAFA',
            backgroundColor:'#FAFAFA',
            transform:'translate(0, 1px)'        
        }
        // alignSelf:'flex-end'
    },
    tabLabel:{
        width:'80%', 
        overflow:'hidden', 
        height:'100%', 
        lineHeight:'2rem', 
        textAlign:'center', 
        textOverflow:'ellipsis'
    },
    selectedTab:{
        borderBottom:'2px solid #FAFAFA',
        backgroundColor:'#FAFAFA',
        transform:'translate(0, 1px)'
    },
    iptLabel:{
        width:'100%',
        height:'2rem',
        backgroundColor:'#FAFAFA',
        borderBottom:'1px solid #EAEAEA',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    iptLabelLeft:{
        fontSize:'.8rem',
        color:'#505050',
        marginLeft:'1rem',
        // height:'100%'
    },
    iptLabelRight:{
        fontSize:'.8rem',
        color:'#808080',
        marginRight:'1rem'
    },
    iptArea:{
        width:'100%',
        height:'3rem',
        backgroundColor:'#FAFAFA',
        borderBottom:'1px solid #EAEAEA',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    iptLeft:{
        fontSize:'.8rem',
        color:'#505050',
        marginLeft:'1rem',
        height:'100%',
        width:'5rem',
        display:'flex'
    },
    iptLeftBtn:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        "& li":{
            listStyleType:'none'
        }
    },
    iptLeftIpt:{
        height:'1.16rem'
    }
})

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
                    <button style={{alignSelf:'flex-end', width:'5rem', height:'2rem', margin:'.5rem 0 .5rem 0'}} onClick={(e)=>{
                        setTypeCheck(!typeCheck)
                        globalEvent.call(e, 'click', setTypeCheck, 0, false)
                    }}>选择</button>
                    <div style={{
                            width:'5rem', 
                            border:'1px solid ', 
                            borderRadius: '3px',
                            backgroundColor:"#FAFAFA",
                            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
                            // color:'red',
                            visibility: typeCheck? 'visible': 'hidden'}}>
                        <ul>
                            <li onClick={()=>{
                                console.log('click')
                            }}>post</li>
                            <li>get</li>
                            <li>push</li>
                        </ul>
                    </div>
                </div>
                <div style={{alignSelf:'flex-start', width:'5rem', height:'2rem', margin:'.5rem 0 .5rem 0'}}>
                    <input type="text" className={classes.iptLeftIpt}/>
                </div>
            </div>
            <div className={classes.iptLabelRight}>
                <Button onClick={()=>{
                    // mouseClick(console.log, '测试点击')
                }}>保存</Button>
            </div>
        </div>
})

/* 布局 */
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
</div>
})

export default Home