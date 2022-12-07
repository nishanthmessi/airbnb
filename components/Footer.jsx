import { GlobeAltIcon } from "@heroicons/react/solid"

const Footer = () => {
  return (
    <>
      <div className='hidden md:flex justify-between items-center sticky bottom-0 z-40 bg-white px-24 py-4 border-t-2 text-[16px]'>
        <div className='flex gap-4'>
          <p>© 2022 Airbnb,Inc.</p>
          <p className="cursor-pointer hover:underline">Privacy</p>
          <p className="cursor-pointer hover:underline">Terms</p>
          <p className="cursor-pointer hover:underline">Sitemap</p>
          <p className="cursor-pointer hover:underline">Company details</p>
          <p className="cursor-pointer hover:underline">Destinations</p>
        </div>

        <div className='flex gap-6 items-center font-medium whitespace-nowrap'>
          <GlobeAltIcon className="h-6 text-gray-700"/>
          <p className="font-bold cursor-pointer hover:underline">English (US)</p>
          <p className="font-bold cursor-pointer hover:underline">$ USD</p>
          <p className="font-bold cursor-pointer hover:underline">Support & resources</p>
        </div>
      </div>
    </>
  )
}

export default Footer