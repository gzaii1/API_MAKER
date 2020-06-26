import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {HomeActions} from '@actions'
import {Header, Left, Footer} from '@components'

const Home = (props) =>{
    const dispatch = useDispatch()
    const Home = useSelector(state => state.HomeReducer)
    useEffect(()=>{
      console.log('users', Home.user)  
    })
    useEffect(()=>{
        const Alex = {
            name:'alex',
            age: 18
        }
        const Bob = {
            name:'Bob',
            age: 18
        }
        dispatch(HomeActions.createUser(Alex))
        setTimeout(()=>{
            dispatch(HomeActions.createUser(Bob))
        }, 2000)
    }, [])
return <>
<Header></Header>
<Left></Left>
<Footer></Footer>
</>
}

export default Home