import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import { Button } from '@material-ui/core'
import { HeadStyles } from '@styles'
import { getI18n } from '@i18n'
/* 获取i18n */
const i18n = getI18n('zhCN/components/Header')

/* 头部主体 */
const Board = withStyles(HeadStyles)(({classes, children}) => 
<div className={classes.root}> {children} </div>);

/* 左侧按钮 */
const LeftBtnGrp = withStyles(HeadStyles)(({classes, children}) =>
<div className={classes.leftBtnGrp}>
  <Button 
    className={classes.addBtn} 
    startIcon={<AddIcon />}
    >{i18n.button_text}
  </Button>
</div>);

/* 中间部分 */
const MiddleArea = withStyles(HeadStyles)(({classes, children}) =>
<div className={classes.leftBtnGrp}>
  <Button>点击</Button>
</div>);

/* 头部组件布局 */
export const Header = () =>{
    const Home = useSelector(state => state.HomeReducer)
    React.useEffect(()=>{
        console.log('Home', Home)
    })
    return <Board>
        <LeftBtnGrp />  <MiddleArea/>
    </Board>
}
