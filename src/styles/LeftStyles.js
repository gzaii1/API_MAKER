import { createStyles } from '@material-ui/core/styles';

export const LeftStyles = createStyles({
    root:{
        flex: "0 0 auto",
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        minWidth: '200px',
        maxWidth: '25vw',
        height: '100%',
        borderRight: '1px solid #EAEAEA',
        boxSizing: 'border-box',
        boxShadow: '1px 0 4px 0 rgba(0, 0, 0, 0.2)',
    },
    searchBox:{
        flex: '0 0 40px',
        padding: '10px 10px 0 10px',
        boxSizing: 'border-box',
    },
    searchBoxInner:{
        height: '30px',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '15px',
        border: '1px solid #EAEAEA',
        paddingLeft: '10px',
        paddingRight: '10px',
        alignItems:'center'
    },
    searchIcon:{
        fill: 'currentColor',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fontSize: '1.5rem',
        transition: 'fill 200ms',
        color:'#767676',

    },
    searchIpt:{
        width:'calc(100% - 20px)',
        height: '1.5rem',
        background:'none',  
	    outline:'none',  
        border:'none',
        color:'#505050',
        fontSize:'.8rem',
        '&:focus':{
            border:'none'
        }
    },
    searchClear:{
        fill: 'currentColor',
        width: '.9em',
        height: '.9rem',
        transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        flexShrink: 0,
        userSelect: 'none',
        color:'#767676',
    },
    mainTabs:{
        height:'2.4rem',
        width:'100%',
        margin:'0',
        padding:'0',
        display:'flex'
    },
    oneTab:{
        lineHeight:'2.5rem',
        width:'50%',
        height:'calc(100%)',
        textAlign:'center',
        cursor:'pointer',
        borderBottom:'1px solid #eaeaea',
        '&:hover':{
            // borderBottom:'.15rem solid #f0753e',
        }
    },
    tabSpan:{
        fontFamily:'"OpenSans", Helvetica, Arial, sans-serif;',
        fontSize:'.9rem'
    },
    selected:{
        borderBottom: '.15rem solid #f0753e'
    }
})