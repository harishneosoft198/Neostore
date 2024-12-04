import React from 'react'
import { Link } from 'react-router-dom'

const OfferBanner = () => {
  return (
    <div className='bg-[#BB0100] duration-200'>
      <div className="text-white h-10 flex justify-center items-center gap-1 font-bold text-sm">
        MARKDOWNS:
        <span className="font-medium"> UP TO 70% OFF </span>
        <Link
          className="underline underline-offset-2 pl-1 font-medium"
          onClick={(e) => e.preventDefault()}
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  )
}

export default OfferBanner