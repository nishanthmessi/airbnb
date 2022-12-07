import Image from 'next/image'
import { sampleData } from '../db/sampleData'

const Cards = () => {
  return (
    <>
      <div className='flex flex-wrap justify-center gap-8 py-8 md:px-20'>
        {sampleData.map((home, i) => (
          <div key={i} className='cursor-pointer mb-6'>
            <div className='relative h-96 w-96 md:h-[22rem] md:w-[22rem]'>
              <Image src={home.imgUrl} fill className='rounded-xl'/> 
            </div>
            <h3 className='text-xl font-bold mt-3'>{home.name}</h3>
            <p>${home.cost}</p>
          </div>
        )) 
        }
      </div>
    </>
  )
}

export default Cards