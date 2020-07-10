import { createStyles } from '@material-ui/core/styles';

export const HomeStyles = createStyles({
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
        // justifyContent:'left'
    },
    iptLeft:{
        fontSize:'.8rem',
        color:'#505050',
        marginLeft:'1rem',
        height:'100%',
        width:'100%',
        display:'flex',
    },
    iptLeftBtn:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    iptLeftBtnBox:{
        alignSelf:'flex-end', 
        zIndex:'9999',
        width:'5rem', 
        height:'2rem', 
        lineHeight:'2rem',
        margin:'.5rem 0 .5rem 0',
        border:'1px solid #D4D4D4',
        borderTopLeftRadius:'3px',
        borderBottomLeftRadius:'3px',
        background:'#ECECEC',
        color:'#505050',
        borderRight:'0',
        display:'flex',
        justifyContent: "space-around",
        alignItems:'center',
        cursor:'pointer'
    },
    iptTotal:{
        width:'5rem', 
        border:'1px solid #D4D4D4',
        borderRadius: '3px',
        color:'#505050',
        backgroundColor:"#FAFAFA",
        background:'#ECECEC',
        zIndex:'9999',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
    },
    iptTotalLi:{
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
    },
    iptLeftIpt:{
        alignSelf:'flex-start', 
        background:'#ECECEC',
        color:'#505050',
        padding:'0 0 0 1rem',
        width:'calc(100% - 9rem)', 
        height:'2rem', 
        margin:'.5rem 0 .5rem 0',
        border:'1px solid #D4D4D4',
        borderTopRightRadius:'3px',
        borderBottomRightRadius:'3px',
        display:'flex',
        alignItems:'center',
        justifyContent:'left',
        '& input':{
            background:'none',  
            outline:'none',
            border:'none',
            width:'30rem',
            maxWidth:'55vw', 
            '&:hover':{
                border:'none'
            }
        }
    },
    typeArea:{
        display:'flex',
        alignItems:'flex-end',
        height:'3rem',
        width:'100%',
        backgroundColor:'#FAFAFA',
        borderBottom:'1px solid #EAEAEA',        
    },
    mainTabs:{
        height:'2.4rem',
        width:'100%',
        margin:'0',
        padding:'0',
        display:'flex',
        justifyContent:'left',
        // alignItems:''
    },
    oneTab:{
        lineHeight:'2.5rem',
        maxWidth:'8rem',
        minWidth:'5rem',
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        height:'calc(100%)',
        textAlign:'center',
        cursor:'pointer',
        margin:'0 .5rem',
        color:'#666666',
        fontSize:'.9rem',
        borderBottom:'1px solid #eaeaea',
        '&:hover':{
            color:'#1A1A1A',
            // borderBottom:'.15rem solid #f0753e',
            fontWeight:'400'
        }
    },
    chatIconBox:{
        width: '6rem',
        height: '100%',
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        cursor:'pointer',
        color:'#808080',
    },
    chatIconSpan:{
        fontSize:'.8rem',
        marginRight:'.5rem'
    },
    chatIcon:{
        height:'100%',
        fontSize: '.9rem',
        color: '#808080',
        // marginLeft:'1rem',
    },
    tabSpan:{
        // color:'#666666',
        fontFamily:'"OpenSans", Helvetica, Arial, sans-serif;',
        fontSize:'.9rem'
    },
    selected:{
        // color:'#1A1A1A',
        borderBottom:'.15rem solid #f0753e',
        // fontWeight:'400'
    },
    /* 参数区域 */
    paramsArea:{
        display:'flex',
        alignItems:'flex-end',
        height:'2rem',
        width:'100%',
        backgroundColor:'#FAFAFA',
        // borderBottom:'1px solid #EAEAEA',     
        color:'#808080',
        fontSize:'.95rem',
        lineHeight:'2rem',
        padding:'0 0 0 1rem'
    },
    /* 参数table */
    paramsTable:{
        display:'flex',
        flexDirection:'column',
        '& .row':{
            display:'flex',
            width:'100%',
            justifyContent:'space-between',
            borderTop:'1px solid #EAEAEA',
            alignSelf:'center',
            // height:'2.2rem',
            '& > div':{
                width:'100%',
                '& > span':{
                    // lineHeight:'2.2rem',
                    marginLeft:'.5rem'
                }
            },
            '& > div:nth-of-type(1)':{
                borderRight:'1px solid #EAEAEA',
                flexShrink:'4'
            },
            '& > div:nth-of-type(2)':{
                borderRight:'1px solid #EAEAEA',
                flexShrink:'3'
            },
            '& > div:nth-of-type(3)':{
                flexShrink:'3'
            }
        },
        '& .title':{
            '& span':{
                fontWeight:'bold',
                textOverflow:'ellipsis',
                cursor:'default',
                fontSize:'.95rem',
                color:'#505050'
            }
        },
        '& .normal':{
            cursor:'text',
            '& span':{
                textOverflow:'ellipsis',
                fontSize:'.9rem',
                color:'#505050'
            }
        },
        '& .blank':{
            borderBottom:'1px solid #EAEAEA',
            cursor:'text',
        },

    },
    /* 响应内容区域 */
    responseArea:{
        display:'flex',
        alignItems:'flex-end',
        height:'2rem',
        width:'100%',
        backgroundColor:'#FAFAFA',
        borderBottom:'1px solid #EAEAEA',
        color:'#A9A9A9',
        fontSize:'.95rem',
        lineHeight:'2rem',
        padding:'0 0 0 1rem'
    },
    responseBody:{
        width:'100%',
        height:'auto',
    },
    tableBox:{
        display:'flex',
        '& .editing':{
            color: '#505050',
            background:'#FFF',
            // height:'96%'
        },
        '& .static':{
            color:'rgba(0,0,0,0)'
        },
        '& .rowSpan':{
            width:'10%',
            height:'2.2rem',
            lineHeight:'2.2rem',
            transform:'translate(-893%, 0)',
            zIndex:'-5',
            '& span':{
                whiteSpace:'nowrap'
            }
        },
        '& input':{
            width:'90%',
            background:'none',  
            outline:'none',
            border:'none',
            // color: '#505050',
            fontSize: '.9rem',
            lineHeight:'2.2rem',
            textOverflow: 'ellipsis',
            '&:focus':{   
                // border:'none'
                zIndex:-1,
                border:'none'
            }
        },
    }
})