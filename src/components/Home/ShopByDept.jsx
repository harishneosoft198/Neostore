import React from 'react'
import { Link } from 'react-router-dom'

const ShopByDept = () => {
    const depts = [
        {
            name:'Popular',
            path:'/',
            imageUrl:''
        },
        {
            name:'Chair',
            path:'/',
            imageUrl:''
        },
        {
            name:'Table',
            path:'/',
            imageUrl:''
        },
        {
            name:'Sofa',
            path:'/',
            imageUrl:''
        },
        {
            name:'Cupboard',
            path:'/',
            imageUrl:''
        },
        {
            name:'Lamp',
            path:'/',
            imageUrl:''
        },
    ]
  return (
    <div className='pt-10'>
        <div className='text-center'>
            <h1 className='uppercase text-lg'>Shop by Department</h1>
            <p className='text-[#7F7F7F] text-sm'>Sitewide Discounts & Savings of up to 25%</p>
        </div>
        <div className='overflow-x-auto p-3 flex flex-row justify-center items-center'>
            {depts.map((each,index)=>(
                <Link to={each.path}  key={index}>
                <div className='border-2 border-[#BFBFBF] w-[180px] h-[180px] m-2 flex flex-col items-center justify-center'>
                    <img src={each.imageUrl} alt={each.path} />
                    <p className='text-center text-[#7F7F7F]'>{each.name}</p>
                </div>
                </Link>
            ))}
        </div>

    </div>
  )
}

export default ShopByDept