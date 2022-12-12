import React from 'react'
import Header from '../components/Header'
import { HeartIcon, UploadIcon, DesktopComputerIcon } from '@heroicons/react/outline'
import { StarIcon, ChevronDownIcon, FlagIcon,ChevronRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import SampleImg from '../assets/img/sample.webp'
import AirCover from '../assets/img/aircover.webp'

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
          <section className='flex flex-col'>
            <div className='flex justify-between mt-6 w-[780px]'>
              <div>
                <p className='text-3xl font-bold'>Private room hosted by Messi</p>
                <p className='text-xl'>3 guests. 1 bedroom. 1 private bathroom</p>
              </div>
              <div className='relative h-16 w-16'>
                <Image src={SampleImg} fill className='object-cover rounded-full'/>
              </div>
            </div>

            <div className='my-7 border-t-2'></div>

            <div className='flex flex-col gap-6'>
              <div className='flex gap-5 items-start'>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="block h-7 w-7 fill mt-1"><path d="M26 2a1 1 0 0 1 .922.612l.04.113 2 7a1 1 0 0 1-.847 1.269L28 11h-3v5h6v2h-2v13h-2l.001-2.536a3.976 3.976 0 0 1-1.73.527L25 29H7a3.982 3.982 0 0 1-2-.535V31H3V18H1v-2h5v-4a1 1 0 0 1 .883-.993L7 11h.238L6.086 8.406l1.828-.812L9.427 11H12a1 1 0 0 1 .993.883L13 12v4h10v-5h-3a1 1 0 0 1-.987-1.162l.025-.113 2-7a1 1 0 0 1 .842-.718L22 2h4zm1 16H5v7a2 2 0 0 0 1.697 1.977l.154.018L7 27h18a2 2 0 0 0 1.995-1.85L27 25v-7zm-16-5H8v3h3v-3zm14.245-9h-2.491l-1.429 5h5.349l-1.429-5z"></path></svg>
                <div>
                  <h1 className='font-bold text-xl mb-1'>Dedicated Workspace</h1>
                  <p className='text-lg'>A common area with wifi that’s well suited for working.</p>
                </div>
              </div>

              <div className='flex gap-5 items-start'>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="block h-7 w-7 fill mt-1"><path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"></path></svg>
                <div>
                  <h1 className='font-bold text-xl mb-1'>Self check in</h1>
                  <p>Check yourself in with the keypad.</p>
                </div>
              </div>

              <div className='flex gap-5 items-start'>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="block h-7 w-7 fill mt-1"><path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path></svg> 
                <div>
                  <h1 className='font-bold text-xl mb-1'>Messi is a Superhost</h1>
                  <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for their guests.
                  </p>
                </div>  
              </div>
            </div>

            <div className='my-10 border-t-2'></div>

            {/* Aircover */}
            <div>
              <Image src={AirCover} className='h-8 w-36 mb-4'/>
              <p className='text-xl'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
              <button className='font-bold text-xl underline mt-3 cursor-pointer'>Learn more</button>
            </div>

            <div className='my-10 border-t-2'></div>

            <div>
              <p className='text-xl'>
              Enjoy a private mountain getaway with huge views on 10 wooded acres!  The property is nestled among mature timber, with a creek running through the backyard.  Most days, you'll get to see moose :)  The main house is 3700+ sq ft with 3 bedrooms, a loft, and 3.5 bathrooms; the detached garage is heated with 2 separate bunkrooms with 5 total beds.  Starlink wifi, hot tub, covered deck & patio, pool table, sunrise over Pike's Peak, sunset over Pennsylvania Mtn, and views of the Milky Way at night :)
              </p>
              <button className='font-bold text-xl underline mt-3 cursor-pointer flex items-center'>Show more<span><ChevronRightIcon className='h-7'/></span> </button>
            </div>

            <div className='my-14 border-t-2'></div>

          </section>
          
          
          {/* Fixed Card Section */}
          <section className='bg-white'>
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