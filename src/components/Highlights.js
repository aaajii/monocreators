import React from "react"

function Highlights({ list }) {
  return (
    <div className="bg-black text-white min-h-screen p-12">
      <div className="text-7xl font-bold text-center pb-12">
        #MONOCREATORS #GOPLAY
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap justify-center w-full">
          {list.map(({ imageUrl, fullName }, index) => (
            <div className="p-4 w-1/3 mt-12">
              <div className="bg-gray-50 aspect-square w-auto">
                <img
                  src={`${imageUrl}/${index}`}
                  alt={fullName}
                  className="object-cover t-0 h-full w-full"
                />
              </div>
              <p className="text-center mt-8 text-3xl font-semibold">
                {fullName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Highlights
