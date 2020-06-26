import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { withStyles, createStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import { Button } from '@material-ui/core'
import { HeadStyles } from '@styles'
import { getI18n } from '@i18n'
/* 获取i18n */
const i18n = getI18n('zhCN/components/Header')

const FooterStyles = createStyles({
    root:{
        position:'fixed',
        bottom:'0',
        left:'0',
        color:'#d4d4d4',
        margin:'0',
        borderTop:'1px solid #D4D4D4',
        height:'1.5rem',
        backgroundColor:'#FAFAFA',
        width:'100vw',
        whiteSpace:'pre'
    }
})

/* 左侧主体 */
const Board = withStyles(FooterStyles)(({classes, children})=> 
    <div className={classes.root}>{children}</div> );
/* 头部主体 */

/* 头部组件布局 */
export const Footer = () =>{
    return <Board>
        {`                    footer                    footer                    footer                    footer                    footer                    footer                    footer                    footer                    footer                    footer`}
    </Board>
}
