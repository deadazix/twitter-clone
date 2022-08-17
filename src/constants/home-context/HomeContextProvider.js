import React,{useReducer,useCallback} from 'react'
import HomeContext from './HomeContext'
const twitRedicer = (state,action)=>{
 
    if(action.type==='ADD_TWIT'){
       
        // const newTwits = [...action.data,...state.twits]
        const newTwits = action.data
        return {
            twits:newTwits,
            currentUser:state.currentUser
        }
    }
    return state
}
const HomeContextProvider = (props) => {
    const [state,dispatch]=useReducer(twitRedicer,{
        twits:[]
        ,
        currentUser:{
            username:'admin231231',
            password:'123456',
            image:'imageSrc',
            name:'admin'
        }
    })
    const dispatchHandler =useCallback( (action)=>{
        dispatch(action)

    },[])
    const value ={
        twits:state.twits,
        dispatch:dispatchHandler,
        currentUser:state.currentUser
    }
  return (

    <HomeContext.Provider value={value}>
        {props.children}

    </HomeContext.Provider>
  )
}

export default HomeContextProvider