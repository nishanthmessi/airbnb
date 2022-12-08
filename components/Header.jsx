import { useState } from "react"
import { useRouter } from "next/router";
import Image from "next/image"
import Logo from '../public/logo.png'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range";


const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [guests, setGuests] = useState(1)
  const router = useRouter()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput('')
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests
      }
    })
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white border-2 p-5 space-x-24 md:px-24">
      <div className="relative flex items-center justify-start h-10 cursor-pointer my-auto" onClick={() => router.push('/')}>
        <Image 
          src={Logo} 
          alt='logo'
          width={130}
          height={50}
        />
      </div>

      <div className="flex justify-center md:border-2 rounded-full py-2 md:shadow-md max-w-sm">
        <input 
          type="text" 
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 font-bold placeholder-gray-400 placeholder:font-normal" 
          placeholder={placeholder || "Search your destination"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer md:mx-2"/>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <div className="flex space-x-4 cursor-pointer">
          <p className="hidden md:inline font-extrabold text-gray-900">Airbnb your home</p>
          <GlobeAltIcon className="h-6 text-gray-700"/>
        </div>
        

        <div className="flex items-center justify-end space-x-2 border-2 border-gray-300 shadow-sm px-2 py-1 rounded-full text-gray-700 cursor-pointer hover:shadow-lg">
          <MenuIcon className="h-6"/>
          <UserCircleIcon className="text-zinc-500 h-10"/>
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 items-center mx-auto mt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="flex items-center gap-40">
            <div>
              <h1 className="text-xl font-bold">Number of Guests</h1>
            </div>
            <div className="flex items-center gap-3">
              <UsersIcon className="h-5"/>
              <input type="number" min={1} value={guests} className="w-12 text-lg outline-none" onChange={(e) => setGuests(e.target.value)}/>
            </div>
          </div>
          <div className="flex gap-60 mt-4">
            <button className="px-4 py-2 border-2 rounded-full shadow-md" onClick={resetInput}>Cancel</button>
            <button 
              className="flex gap-2 px-4 py-2 border-2 rounded-full bg-red-400 text-white" 
              onClick={search}
            >
              <span><SearchIcon className="h-6"/></span> 
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header