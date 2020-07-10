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
    const [tableLst, setTableLst] = useState([
        {
            type:'normal',
            status:'static',
            data:{
                key:'name',
                value:'张三',
                direction:'变量'
            },
        },{
            type: 'blank',
            status:'static',
            data: {
                key:'',
                value:'',
                direction:''
            },
        }]);
    
    /* 表格每行 */
    const Row = ({row, children, idx})=> <div 
        className={`${row.type||'normal'} row`}
        onClick={()=>{
            if(row.type === 'blank'){
                console.log('blank', row)
            }
        }}
        >{children}</div>

    /* table选中时 */
    function onFocus(e){
        e.target.classList = ['editing']
    }
    /* table离开时 */
    function onBlur(e){
        e.target.classList = ['static']
    }

    return <> 
        <div className={classes.paramsArea}>
            参数列表:
        </div>
        {/* 参数列表table */}
        <div className={classes.paramsTable}>
            <div className='title row'>
                <div className={classes.tableBox}>
                    <div style={{height:'2.2rem'}}><span>KEY</span></div>
                </div>
                <div className={classes.tableBox}>
                    <div><span>VALUE</span></div>
                </div>
                <div className={classes.tableBox}>
                    <div><span>DIRECTION</span></div>
                </div>
            </div>
            {
                [{
                    type: 'title',
                    status:'static',
                    data: {
                        key:'KEY',
                        value:'VALUE',
                        direction:'DIRECTION'
                    }
                }, ...tableLst].map((row, idx_1) =>{
                    console.log(row, 'row')
                    const dataList = Object.entries(row.data)
                    return <Row key={`row${idx_1}`} row={row} idx={idx_1 - 1}>
                        {
                            dataList.map((val, idx_2)=> 
                                <div key={`data${idx_1}-${idx_2}`} className={classes.tableBox}>
                                <input type="text" className='static' onFocus={onFocus} onBlur={onBlur} />
                                <div className='rowSpan'><span>{val[1]}</span></div>
                            </div>)
                        }
                    </Row>
                })
            }
            {/* <Title> */}
            {/* </Title> */}
        </div>
    </>
})

/* Response: 返回内容 */
const ResponseArea = withStyles(HomeStyles)(({classes})=>{
    return <> 
        <div className={classes.responseArea}>
            <span>Response</span>
        </div>
        <div className={classes.responseBody}>
            response
        </div>
    </>
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
        <TypeArea />
        
        <ParamsArea />

        <ResponseArea />
        

    </ApiConfig>
    {/* <Tooltip label='POST' defaultSelect='get' dataList={lst}/> */}
</div>
})

export default Home