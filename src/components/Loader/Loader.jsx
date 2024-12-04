import React from 'react'
import {ThreeCircles} from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center fixed top-0 left-0 right-0 opacity-75 bg-slate-200">
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
    </div>
  )
}

export default Loader