import Image from 'next/image'
import { sampleData } from '../db/sampleData'
import {StarIcon}  from '@heroicons/react/solid'

const Cards = () => {
  return (
    <>
      <div className='flex flex-wrap justify-center gap-8 py-8 md:px-10'>
        {sampleData.map((home, i) => (
          <div key={i} className='cursor-pointer mb-6'>
            <div className='relative h-96 w-96 md:h-[21.5rem] md:w-[22.5rem]'>
              <Image src={home.imgUrl} fill className='rounded-xl object-cover'/> 
            </div>
            <div className='flex justify-between items-center mt-3 text-xl'>
              <h3 className='font-bold'>{home.name}</h3>
              <p className='flex items-center gap-1'><span><StarIcon className='h-5 text-gray-800'/></span>4.5</p>
            </div>
            <p className='text-lg font-bold'>${home.cost} <span className='font-normal'>night</span> </p>
          </div>
        )) 
        }
      </div>
    </>
  )
}

export default Cards