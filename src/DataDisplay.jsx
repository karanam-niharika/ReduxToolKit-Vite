import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingData } from './ReactReduxApi'

const DataDisplay = () => {

  let dispatch = useDispatch()

    let dataShow = useSelector((state)=>{
      
        return state.first
    })

console.log(dataShow)
    useEffect(()=>{
        dispatch(fetchingData())
    },[])



  return ( 
    <div>DataDisplay</div>

    
  )
}

export default DataDisplay