import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APP_BASE_API } from "../../constants";
import { getUser } from "../../appStore/userSlice";


const useGetAuthUsers = ()=>{
    const dispatch = useDispatch()
    const getUsers = async ()=>{
        try{
            const randomNumber = Math.floor(Math.random() * 28);
            const url = `${APP_BASE_API}/users`
            const data = await fetch(url);
            const json = await data.json();
            const oneUserDetails = json.users[randomNumber]

            dispatch(getUser(oneUserDetails));
        } 
        catch{
            console.log('Error occured');
        }
    }
    
    useEffect(()=>{
        getUsers();
    },[])
    
}

export default useGetAuthUsers