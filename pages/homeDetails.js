import React from 'react'
import Header from '../components/Header'
import { HeartIcon, UploadIcon } from '@heroicons/react/outline'
import { StarIcon, ChevronDownIcon, FlagIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import SampleImg from '../assets/img/sample.webp'

const homeDetails = () => {
  return (
    <div className='md:px-72'>
      {/* Header  */}
      <Header/>
      <div className='px-6 md:px-24'>
        <div className='flex justify-between pr-2'>
          <div className='font-bold'>
            <h1 className='text-3xl my-6 tracking-wide'>Footprint - Wilderness Experience</h1>
            <p className='underline'>1 review</p>
            <p className='underline'>Munnar, Kerala, India</p>
          </div>
          <div className='flex items-end gap-8 font-bold'>
            <button className='flex gap-2 underline'><UploadIcon className='h-6'/>Share</button>
            <button className='flex gap-2 underline'><HeartIcon className='h-6'/>Save</button>
          </div>
        </div>

        {/* Image Section */}
        <div className='flex mt-10 mb-6 gap-2'>
          <div className='relative h-96 w-96 md:h-[34.5rem] md:w-[50rem]'>
            <Image src={SampleImg} fill className='object-cover rounded-l-xl'/>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='relative h-96 w-96 md:h-[17rem] md:w-[20.5rem]'>
              <Image src={SampleImg} fill className='object-cover'/>
            </div>
            <div className='relative h-96 w-96 md:h-[17rem] md:w-[20.5rem]'>
              <Image src={SampleImg} fill className='object-cover'/>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='relative h-96 w-96 md:h-[17rem] md:w-[20.5rem]'>
              <Image src={SampleImg} fill className='object-cover rounded-tr-xl'/>
            </div>
            <div className='relative h-96 w-96 md:h-[17rem] md:w-[20.5rem]'>
              <Image src={SampleImg} fill className='object-cover rounded-br-xl'/>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='flex gap-32'>
          <section className='flex justify-between mt-6 w-[780px]'>
            <div className=''>
              <p className='text-3xl font-bold'>Private room hosted by Messi</p>
              <p className='text-xl'>3 guests. 1 bedroom. 1 private bathroom</p>
            </div>
            <div className='relative h-16 w-16'>
              <Image src={SampleImg} fill className='object-cover rounded-full'/>
            </div>
          </section>
          
          {/* Fixed Section */}
          <section className='sticky top-60'>
            <div className='border-2 rounded-xl h-[38.5rem] w-[28rem] p-6'>
              <div className='flex justify-between'>
                <p className='text-2xl font-bold'>$20 night</p>
                <p className='flex items-center gap-1 font-bold text-[1.05rem]'>
                  <span><StarIcon className='h-5'/></span>4.52
                  <span className='mb-4 text-xl px-[2px]'>.</span>
                  <span className='text-gray-500 underline cursor-pointer'>30 reviews</span>
                </p>
              </div>

              <div className='flex mt-6 cursor-pointer'>
                <div className='py-2 pl-4 pr-24 border-2 border-gray-400 rounded-tl-xl'>
                  <p>CHECK-IN</p>
                  <p>12/17/2022</p>
                </div>
                <div className='py-2 pl-4 pr-24 border-r-2 border-b-2 border-t-2 border-gray-400 rounded-tr-xl'>
                  <p>CHECKOUT</p>
                  <p>12/24/2022</p>
                </div>
              </div>
              <div className='py-2 pl-4 border-b-2 border-r-2 border-l-2 border-gray-400 rounded-b-xl'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p>Guests</p>
                    <p>1 guest</p>
                  </div>
                  <ChevronDownIcon className='h-8 pr-4'/>
                </div>
              </div>
              <button className='bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 w-full p-4 rounded-xl mt-4 text-white text-xl font-bold'>Reserve</button>
              <p className='text-center py-6 tracking-wide'>You won't be charged yet</p>

              <div className='flex justify-between text-xl'>
                <div className='flex flex-col gap-2 underline'>
                  <p className='cursor-pointer'>$500 x 5 nights</p>
                  <p className='cursor-pointer'>Special Offer</p>
                  <p className='cursor-pointer'>Service Fee</p>
                  <p className='cursor-pointer'>Cleaning fee</p>
                </div>
                <div className='flex flex-col gap-2 text-right'>
                  <p>$2500</p>
                  <p>-$500</p>
                  <p>$300</p>
                  <p>$150</p>
                </div>
              </div>
              <div className='my-6 border-t-2'></div>
              <div className='flex justify-between text-xl font-bold'>
                <p>Total before taxes</p>
                <p>$2450</p>
              </div>
            </div>

            <div className='flex justify-center items-center gap-2 my-6 tracking-wider text-zinc-500'>
              <FlagIcon className='h-5'/>
              <p className='text-center font-bold underline'>Report this listing</p>
            </div>
            
          </section>
        </div>
      </div>
    </div>
  )
}

export default homeDetails