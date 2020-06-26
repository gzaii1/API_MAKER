import { createStyles } from '@material-ui/core/styles';

export const HeadStyles = createStyles({
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
    },
    addBtn:{
        color:'#fff',
        fontSize:'1rem',
        backgroundColor:'#f0753e',
        height:'2.3rem',
        width:'5rem',
        "&:hover":{
            backgroundColor:'#f26247'
        }
    }
  });