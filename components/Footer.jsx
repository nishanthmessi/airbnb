import { GlobeAltIcon } from "@heroicons/react/solid"

const Footer = () => {
  return (
    <>
      <div className='hidden md:flex justify-between items-center sticky bottom-0 z-40 bg-white px-24 py-4 border-t-2 text-lg'>
        <div className='flex gap-4'>
          <p>© 2022 Airbnb,Inc.</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Sitemap</p>
          <p>Company details</p>
          <p>Destinations</p>
        </div>

        <div className='flex gap-4 items-center font-medium'>
          <GlobeAltIcon className="h-6 text-gray-700"/>
          <p>English (US)</p>
          <p>$ US</p>
          <p>Support & resources</p>
        </div>
      </div>
    </>
  )
}

export default Footer