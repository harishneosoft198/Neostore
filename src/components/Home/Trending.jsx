import React from 'react'
import { Link } from 'react-router-dom';
import useGetTrending from '../../utils/customHooks/Home/useGetTrending';
import { useSelector } from 'react-redux';

const Trending = () => {
    const trendingData = useSelector((state)=>state.home.trending);
    useGetTrending()
  return (
    <div className='pt-10'>
        <div className='text-center'>
            <h1 className='uppercase text-lg'>Trending</h1>
            <p className='text-[#7F7F7F] text-sm'>Explore a wide range of affordable, well-designed and functional home furnishing solutions.</p>
        </div>
        <div className='overflow-x-auto p-3 flex flex-row justify-center items-center'>
            {trendingData?.products && trendingData?.products.map(each=>(
                <Link to={`all-products/${each.title
                    .replace(/\s+/g, '-')
                    .toLowerCase()}`} key={each}>
                    <div className=''>
                        <div className='w-48 h48'>
                            <img src={each.images[0]} alt={each.name}/>
                        </div>
                        <p className='text-base font-medium text-[#4F4F4F] w-48 overflow-hidden whitespace-nowrap text-ellipsis'>
                            {each.title}
                        </p>
                        <p className='text-base font-medium text-[#282627] '>
                            {each.price}
                        </p>
                    </div>
                </Link>
            ))
            }
        </div>
    </div>
  )
}

export default Trending