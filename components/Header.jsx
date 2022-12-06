import Image from "next/image"
import Logo from '../public/logo.png'
import { SearchIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center justify-start h-10 cursor-pointer my-auto">
        <Image 
          src={Logo} 
          alt='logo'
          width={100}
          height={30}
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
        <input type="text" className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 font-bold placeholder-gray-400 placeholder:font-normal" placeholder="Search"/>
        <SearchIcon className="hidden md:inline-flex h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer md:mx-2"/>
      </div>

      <div>
        
      </div>
    </header>
  )
}

export default Header