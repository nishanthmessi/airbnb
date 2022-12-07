import Image from "next/image"
import Logo from '../public/logo.png'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white border-2 p-5 space-x-24 md:px-24">
      <div className="relative flex items-center justify-start h-10 cursor-pointer my-auto">
        <Image 
          src={Logo} 
          alt='logo'
          width={130}
          height={50}
        />
      </div>

      <div className="flex justify-center md:border-2 rounded-full py-2 md:shadow-md max-w-sm">
        <input type="text" className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 font-bold placeholder-gray-400 placeholder:font-normal" placeholder="Search"/>
        <SearchIcon className="hidden md:inline-flex h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer md:mx-2"/>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <div className="flex space-x-4 cursor-pointer">
          <p className="hidden md:inline font-bold text-gray-600 ">Airbnb your home</p>
          <GlobeAltIcon className="h-6 text-gray-700"/>
        </div>
        

        <div className="flex items-center justify-end space-x-2 border-2 border-gray-300 shadow-sm px-2 py-1 rounded-full text-gray-700 cursor-pointer hover:shadow-lg">
          <MenuIcon className="h-6"/>
          <UserCircleIcon className="text-zinc-500 h-10"/>
        </div>
      </div>
    </header>
  )
}

export default Header