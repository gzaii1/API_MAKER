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
        width:'calc(55vw + 5rem)',
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
        width:'30rem',
        maxWidth:'55vw', 
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
    }
})