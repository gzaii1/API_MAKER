import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import { Button } from '@material-ui/core'
const styles = createStyles({
    root: {
        width:'100vw',
        height:'3rem',
        backgroundColor:'#262626',
        zIndex: '90',
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        color:'#FFFFFF',
        alignItems:'center'
    },
    leftBtnGrp: {
        marginLeft:'1rem',
        // color:'#FFFFFF'
    }
  });

/* 头部主体 */
const Board = withStyles(styles)(({classes, children}) => 
<div className={classes.root}> {children} </div>);

/* 左侧按钮 */
const LeftBtnGrp = withStyles(styles)(({classes, children}) =>
<div className={classes.leftBtnGrp}>
  <Button>点击</Button>
</div>);

/* 中间部分 */
const MiddleArea = withStyles(styles)(({classes, children}) =>
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
