import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import useGetTopBanner from '../../utils/customHooks/Home/useGetTopBanner';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TopBanner = () => {
  const data = useSelector((state)=>state.home.topbBanner);
  useGetTopBanner();
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper md:h-[500px] lg:h-[500px] xl:h-[600px] 2xl:h-[600px]">
          {data?.products &&
          data?.products.map((item) => (
          <SwiperSlide>
            <div key={item.id}>
              <div
                className="bg-no-repeat bg-contain bg-right h-auto w-full md:h-[500px] lg:h-[500px] xl:h-[600px] 2xl:h-[600px]"
                style={{backgroundImage: `url(${item.images[0]})`}}
              >
                <div className="flex flex-col justify-center h-[inherit] gap-8 w-[max-content] pl-10 s:pl-4">
                  <h2 className="text-base font-normal pl-2 border-solid border-black border-l-2 uppercase md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
                    {item.category} <br /> 2024
                  </h2>
                  <h3 className="text-xl font-bold s:text-sm xs:text-sm sm:text-sm">
                    New Arrivals
                  </h3>
                  <h1 className="text-xl font-light w-80 s:w-20 xs:w-20 sm:w-20 md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl">
                    Spring Collections
                  </h1>
                  <Link
                    className="bg-[#BB0100] text-white text-base py-2 px-6 w-[max-content] rounded-sm s:text-sm s:px-4 xs:text-sm xs:px-4 sm:text-sm sm:px-4"
                    to={`all-products/${item.title
                    .replace(/\s+/g, '-'
                    )
                    .toLowerCase()}`}
                    state={{ data: item }}
                  >
                  Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default TopBanner