import { useDispatch } from "react-redux"
import { getTrending } from "../../appStore/homeSlice"
import { APP_BASE_API } from "../../constants";
import { useEffect } from "react";

const useGetTrending = () => {
  const dispatch = useDispatch();
  const listOfCategories = [
    'mobile-accessories',
    'motorcycle',
    'vehicle',
    'groceries'
  ]

  const randomNum = Math.floor(Math.random()*5);
  const getData = async ()=>{
    const data = await fetch(`${APP_BASE_API}/products/category/${listOfCategories[randomNum]}`);
    const json = await data.json();

    dispatch(getTrending(json));
  }
  useEffect(()=>{
    getData();
  },[])
}

export default useGetTrending