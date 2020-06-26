import React, { useState, useEffect } from 'react'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import { getI18n } from '@i18n'
import { withStyles, createStyles } from '@material-ui/core/styles';
import { globalEvent, debounce } from '@utils'
// 负责托管一些全局监听的事件
const windowListener = globalEvent('click')

const tooltipStyles = createStyles({
    main:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    top:{
        // alignSelf:'flex-end', 
        zIndex:'9999',
        width:'5rem', 
        height:'2rem', 
        lineHeight:'2rem',
        margin:'.5rem 0 .5rem 0',
        // border:'1px solid #D4D4D4',
        // borderTopLeftRadius:'3px',
        // borderBottomLeftRadius:'3px',
        background:'#ECECEC',
        color:'#505050',
        borderRight:'0',
        display:'flex',
        justifyContent: "space-around",
        alignItems:'center',
        cursor:'pointer'
    },
    bottomLst:{        
        width:'5rem', 
        border:'1px solid #D4D4D4',
        borderRadius: '3px',
        color:'#505050',
        backgroundColor:"#FAFAFA",
        background:'#ECECEC',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
    },
    li:{
        width:'100%', 
        background:'#FAFAFA',
        height:'1.8rem',
        fontSize:'.9rem',
        lineHeight:'1.8rem',
        textAlign:'center',
        color:'#505050',
        fontFamily:'"OpenSans", Helvetica, Arial, sans-serif',
        userSelect:'none',
        cursor:'pointer',
        '&:hover':{
            background:'#EAEAEA'
        }
    }
})

export const Tooltip = withStyles(tooltipStyles)((
    {
        classes, // 
        label, // 标题
        dataList = [],
        onSelect = ()=>{},
        // select,
        defaultSelect,
        // searchBy = 'index' // or 'value', 默认为index
    }) =>{
    const [typeCheck, setTypeCheck] = useState(false)
    const [select, setSelect] = useState(false)

    const setSelectImpl = (prop) =>{
        setSelect(dataList.find(val=> val.value === prop))
    }

    useEffect(()=>{
        setSelectImpl(defaultSelect)
    }, [])

    return <div className={classes.main}>
    <div 
        className={classes.top}
        onClick={()=>{windowListener(setTypeCheck, true, false)}}
    >
        <b>
            {    
                select?
                select.label: label
            }
            
        </b>
        {typeCheck?<ArrowDropUp />:<ArrowDropDown />}
    </div>
    
    <div 
        style={{visibility: typeCheck? 'visible': 'hidden'}}>
        <div className={classes.bottomLst}>
            {
                dataList.map(({label, value})=> 
                    <div 
                        key={`li_${value}`}  
                        onClick={(e)=>{ 
                            onSelect(e, value)
                            setSelectImpl(value)
                        }}
                        className={classes.li}>{label}</div>)
            }
        </div>
    </div>
</div>
})