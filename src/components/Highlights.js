import React from "react"

import Slider from "react-slick"

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 100,
}

function Highlights({ list }) {
  const renderList = () => {
    return list.map(({ imageUrl, fullName }, index) => (
      <div className="p-4 sm:w-1/3 sm:mt-12">
        <div className="bg-gray-50 aspect-square w-auto">
          <img
            src={`${imageUrl}/${index}`}
            alt={fullName}
            className="object-cover t-0 h-full w-full"
          />
        </div>
        <p className="text-center mt-4 sm:mt-8 text-3xl font-semibold">
          {fullName}
        </p>
      </div>
    ))
  }
  return (
    <div className="bg-black text-white sm:min-h-screen p-12">
      <div className="text-lg sm:text-7xl font-bold text-center pb-12">
        #MONOCREATORS #GOPLAY
      </div>
      <div className="sm:mt-8">
        <div className="sm:flex flex-wrap justify-center w-full hidden">
          {renderList()}
        </div>
        <div className="sm:hidden">
          <Slider {...settings} className="overflow-hidden">
            {renderList()}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Highlights
