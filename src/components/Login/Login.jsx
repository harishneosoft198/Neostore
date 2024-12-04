import React,{useRef,useState,useEffect} from 'react'
import LoginBanner from '../../assets/images'
import { useSelector } from 'react-redux'
import useGetAuthUsers from '../../utils/customHooks/user/useGetAuthUser'
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../utils/appStore/userSlice'
import { APP_BASE_API } from '../../utils/constants'
import { Navigate } from 'react-router-dom'
import Loader from '../Loader/Loader'

const Login = () => {
    const [isCopied,setCopy] = useState({uname:false,pass:false});
    const [loader,setLoader] = useState(false);

    const userDetails = useSelector((store)=>store.user?.usersData);
    const isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn')) || false;
    // console.log(userDetails);
    // const {username,password} = userDetails;
    // console.log(userDetails);
    useGetAuthUsers();
    const userCopy = useRef();
    const passCopy = useRef();

    const userVal = useRef();
    const passVal = useRef();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleCopy = (e,elValue,type)=>{
        e.preventDefault();
        navigator.clipboard.writeText(elValue);
        if(type == 'user'){
            setCopy((state)=>({...state,uname:true}))
        }
        else{
            setCopy((state)=>({...state,pass:true}))
        }
    }
    const  handleSubmit = ()=>{
        const uname = userVal.current.value
        const password = passVal.current.value
        if( uname === '' || password === ''){
            toast.error('please enter correct user name or password');
            return;
        }
        const validateUser = async ()=>{
            try{
                setLoader(true);
                const url = `${APP_BASE_API}/auth/login`
                const data = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username:uname ,
                        password: password
                    })
                    })
                const json = await data.json();
                sessionStorage.setItem('accessToken',json.accessToken);
                sessionStorage.setItem('isLoggedIn',true);
                sessionStorage.setItem('userInfo',json);
                toast.success('User SuccessFully Logged In');
                dispatch(addUser(json));
                navigate('/');
                setLoader(false);
            } 
            catch{
                console.log('Error occured');
                toast.error('Please enter correct user name and password that are given below');
            }
        }
        validateUser();  
    }
  return (
    <>
    {loader && <Loader/>}
    { isLoggedIn ? <Navigate to="/"/> : 
    (<div>
    <div className="w-full flex flex-row p-4 mx-auto s:flex-col xs:flex-col sm:flex-col lg:justify-around xl:container xl:p-8 2xl:container 2xl:px-0">
      <div className="flex flex-col w-1/2 s:w-auto xs:w-auto sm:w-auto">
        <h1 className="font-bold text-xl text-center text-[#BB0100] mb-2 md:text-2xl md:text-start lg:text-3xl lg:text-start xl:text-3xl xl:text-start 2xl:text-3xl 2xl:text-start">NeoSTORE</h1>
        <img
          src={LoginBanner}
          alt="Login img"
          className="mx-auto  s:hidden xs:hidden sm:hidden lg:pt-8 xl:py-20 2xl:py-20"
        />
      </div>
      <div className="flex justify-center items-center w-1/2 s:w-auto xs:w-auto sm:w-auto">
        <form
          className="h-max bg-white flex flex-col justify-center rounded-2xl w-fit p-4 xl:w-96 xl:py-10 xl:px-8 2xl:w-96 2xl:py-10 2xl:px-8"
          style={{boxShadow:'rgba(0, 0, 0, 0.06) 0px 0px 15px 2px'}}
          onSubmit={(e)=>e.preventDefault()}
        >
          <h1 className="font-bold text-2xl text-[#E91B1A] text-center">LOG IN</h1>
          <div className="pt-4 xl:pt-10 2xl:pt-10">
            <div>
              <div className="w-full"><label
                  for=":rk:"
                  className="block mt-2 font-bold text-sm text-[#666666]"
                >Username</label>
                <input
                  id=":rk:"
                  type="text"
                  className="w-full h-5 px-3 py-5 bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 rounded-md mt-2"
                  placeholder="Username"
                  name="username"
                  ref={userVal}
                /></div>
            </div>
            <div>
              <div className="w-full"><label
                  for=":rl:"
                  className="block mt-2 font-bold text-sm text-[#666666]"
                >Password</label><input
                  id=":rl:"
                  type="password"
                  className="w-full h-5 px-3 py-5 bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 rounded-md mt-2"
                  placeholder="Password"
                  name="password"
                  ref={passVal}
                /></div>
            </div>
            <div className="text-right"><a
                className="font-normal text-xs text-[#585858] underline"
                href="/login"
              >Forgot Password</a></div>
            <div className="text-center py-8">
                <button
                className="w-64 bg-[#BB0100] text-white py-2"
                onClick={handleSubmit}
              >Continue</button></div>
            <div className="text-center font-normal text-sm text-[#4F4F4F]">New to NeoSTORE? <a
                className="text-base underline"
                href="/signup"
              >Sign Up</a></div>
            <p className="font-bold text-[#E91B1A] text-center mt-3">Hello User Please use below credentials to LOG IN</p>
            <div className="flex gap-4 mt-2">
              <div className="w-full">
                <input
                  id="copyUser"
                  type="text"
                  className="w-full h-5 px-3 py-5 bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 rounded-md"
                  placeholder="username"
                  readOnly=""
                  name="copyUser"
                  value={userDetails?.username}
                  ref={userCopy}
                />
                </div>
                <button className="bg-[#BB0100] text-white px-5 rounded-md" onClick={(e)=>handleCopy(e,userCopy.current.value,'user')}>
                    {isCopied.uname ? 'Copied' : 'Copy'}
                </button>
            </div>
            <div className="flex gap-4 mt-2">
              <div className="w-full">
                <input
                  id="copyPass"
                  type="text"
                  className="w-full h-5 px-3 py-5 bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 rounded-md"
                  placeholder="Password"
                  readOnly=""
                  name="copyPass"
                  value={userDetails?.password}
                  ref={passCopy}
                />
                </div>
                <button className="bg-[#BB0100] text-white px-5 rounded-md" onClick={(e)=>handleCopy(e,passCopy.current.value,'pass')}>
                    {isCopied.pass ? 'Copied' : 'Copy'}
                </button>
            </div>
          </div>
        </form>
      </div>
    </div></div>)}
    </>
    )
}

export default Login