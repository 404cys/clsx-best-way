"use client"
import Link from 'next/link'
import { useState } from 'react'
 
export default function Navbar(){
const [navIsOpened, setNavIsOpened] = useState(false)
const closeNavbar = () => {
setNavIsOpened(false)
}
const toggleNavbar = () => {
setNavIsOpened(navIsOpened => !navIsOpened)
}
return (
<>
  <div aria-hidden={true} onClick={() => {
    closeNavbar()
  }} className={
    `fixed bg-gray-800/40 inset-0 z-30 ${navIsOpened ? "lg:hidden" : "hidden lg:hidden"}`
  } />
  <header className="sticky top-0 w-full flex items-center h-20 border-b  border-b-gray-900 z-40  bg-gray-950/80 backdrop-filter backdrop-blur-xl">
    <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
      <div className="flex items-center min-w-max">
        <Link href="/" className="relative flex items-center gap-2.5">
          
          <span className="inline-flex text-lg font-bold text-white">
            Clsx
          </span>
        </Link>
      </div>
      <div className={`
        absolute top-full left-0 bg-gray-950 lg:bg-transparent border-b border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex lg:transition-none duration-300 ease-linear gap-x-6
        ${navIsOpened ? "visible opacity-100 translate-y-0" : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"}
        `}>
        <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-300 lg:w-full lg:justify-center">
          <li>
            <Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Home</Link>
          </li>
          <li>
            <Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Portfolio</Link>
          </li>
          <li>
            <Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Services</Link>
          </li>
          <li>
            <Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Company</Link>
          </li>
          <li>
            <Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Contact</Link>
          </li>
        </ul>
        
      </div>
      <div className="flex items-center lg:hidden">
        <button onClick={() => {
          toggleNavbar()
        }} aria-label='toggle navbar' className="outline-none border-l  border-l-gray-800 pl-3 relative py-3">
          <span aria-hidden={true} className={`
            flex h-0.5 w-6 rounded  bg-gray-300 transition duration-300
            ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
          `}>
          </span>
          <span aria-hidden={true} className={`
            mt-2 flex h-0.5 w-6 rounded  bg-gray-300 transition duration-300
            ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
            `} />
        </button>
      </div>
    </nav>
  </header>
</>
)
}