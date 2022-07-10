import React from "react"
import ADAM_IMG from "../images/Adam.png"
import BRIAN_IMG from "../images/Brian.png"

const COVER_URL =
  "https://blog.monocreators.com/uploads/2020/03/Image-1-26-20-at-12.52-AM.jpg"
const BLOG_URL =
  "https://blog.monocreators.com/adam-blackstone-brian-frasier-moore-super-bowl-2020/"

function Hero() {
  return (
    <div className="sm:h-screen">
      <div className="relative">
        <div className="absolute bg-gradient-to-l from-indigo-600 via-black to-black sm:h-screen w-full opacity-50"></div>
        <div className="absolute flex justify-end pr-16 sm:h-screen w-1/3 right-0">
          <div className="sm:flex flex-col justify-center text-white hidden">
            <span className="text-7xl mb-4">Featured Artists</span>
            <span className="text-xl mb-4">
              Adam Blackstone and Brian Frasier-Moore discuss Super Bowl 2020
              and more.
            </span>
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noreferrer"
              className="p-4 py-2 rounded-md bg-orange-400 font-bold text-white w-fit"
            >
              Read More
            </a>
          </div>
        </div>
        <img
          src={COVER_URL}
          alt="Adam Blackstone and Brian Frasier-Moore"
          className="object-cover t-0 h-screen w-full hidden sm:block"
        />
        <div className="h-screen sm:hidden">
          <div className="flex h-3/4">
            <img
              src={ADAM_IMG}
              alt="Adam Blackstone and Brian Frasier-Moore"
              className="object-cover t-0 h-full w-1/2"
            />
            <img
              src={BRIAN_IMG}
              alt="Adam Blackstone and Brian Frasier-Moore"
              className="object-cover t-0 h-full w-1/2 right-0"
            />
          </div>
          <div className="h-1/4 bg-black text-white text-center">
            <h1 className="text-lg font-semibold mb-2 pt-4">
              Featured Artists
            </h1>
            <p className="text-lg mb-4">
              Adam Blackstone and Brian Frasier-Moore discuss Super Bowl 2020
              and more.
            </p>
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noreferrer"
              className="p-4 py-2 rounded-md bg-orange-400 text-white w-fit"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Hero
