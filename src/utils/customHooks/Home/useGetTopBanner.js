import React, { useEffect } from 'react'
import { APP_BASE_API } from '../../constants'
import { useDispatch } from 'react-redux'
import { getTopBanner } from '../../appStore/homeSlice'

const useGetTopBanner = () => {
    const dispatch = useDispatch()
    const getData = async()=>{
        const data = await fetch(`${APP_BASE_API}/products/category/home-decoration`);
        const json = await data.json();
        dispatch(getTopBanner(json));
   
    }
useEffect(()=>{
    getData();
},[])
}

export default useGetTopBanner