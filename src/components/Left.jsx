import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { LeftStyles } from '@styles'
import { getI18n } from '@i18n'
/* 获取i18n */
const i18n = getI18n('zhCN/components/Left')

/* 左侧主体 */
const Board = withStyles(LeftStyles)(({classes, children})=> 
    <div className={classes.root}>{children}</div> );

/* 左侧搜索框 */
const Search = withStyles(LeftStyles)(({classes})=>
    <div className={classes.searchBox}>
        <div className={classes.searchBoxInner}>
            <SearchIcon className={classes.searchIcon}/>
            <input className={classes.searchIpt} type="text"/>
            <CloseIcon className={classes.searchClear} />
        </div>
    </div>);

/* 主要内容 */
const Main = withStyles(LeftStyles)(({classes, children}) =>{
    const Tabs = i18n.Tabs
    const [selected, changeTab] = useState(Tabs[0])

    return <div>
        <div className={classes.mainTabs}>
            {
                Tabs.map((select, idx)=>
                     <div key={`tab${idx}`} className={`${classes.oneTab} ${selected.value===select.value?classes.selected:''}`} onClick={()=>changeTab(select)}>
                        <span className={classes.tabSpan}>{select.label}</span>
                    </div>)
            }
        </div>
        <div style={{width:'100%', height:'100%', lineHeight:'100%', textAlign:'center'}}>
            <Content 
                selected={selected.value} 
                value='p'
            >
                tab1
            </Content>
            <Content
                selected={selected.value} 
                value='i'
            >
                tab2
            </Content>
        </div>
    </div>});

const Content = withStyles(LeftStyles)(({classes, children, selected, value}) =>{
    return (
        selected === value?
            <div>{children}</div>
            :null    
    )
})
/* 头部组件布局 */
export const Left = () =>
     <Board>
        <Search />
        <Main /> 
    </Board>

