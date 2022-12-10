import { useRouter } from 'next/router'
import Image from 'next/image'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { format } from 'date-fns'
import { StarIcon } from '@heroicons/react/solid'
import MapGeo from '../components/MapGeo'

const Search = ({ searchResults }) => {
  const router = useRouter()

  const { location, startDate, endDate, guests } = router.query

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${guests}`}/>
      <Categories/>
      <main className='flex'>
        <section className='pl-8 max-w-4xl z-30 bg-white'>
          <p className='text-base font-bold my-6 flex md:pl-8 justify-center md:justify-start'>Over 1,000 homes in {location}</p>
          <div className='flex flex-wrap justify-center gap-8'>
            {searchResults.map(({ img, location, title, description, star, price , total }, i) => (
              <div key={i} className='cursor-pointer mb-6'>
                <div className='relative h-96 w-96 md:h-[23rem] md:w-[24rem] gap-2'>
                  <Image src={img} alt='houses' fill className='rounded-xl object-cover'/> 
                </div>
                <div className='flex items-center mt-3 justify-between'>
                  <div>
                    <h3 className='text-lg font-bold'>{location}</h3>
                  </div>
                  <div>
                    <p className='flex items-center text-lg gap-1'>
                      <StarIcon className='h-5 text-gray-800'/>
                      {star}
                    </p>
                  </div>
                </div>
                  <h3 className='text-lg text-cutoff max-w-sm'>{title}</h3>
                  <p className='text-lg font-bold'>{price} <span className='font-normal'></span> </p>
              </div>
            ))}
          </div> 
        </section>

        <section className='hidden xl:inline-flex xl:fixed xl:top-0 xl:right-0 overscroll-y-none scrollbar-hide'>
          <MapGeo searchResults={searchResults}/>
        </section>
      </main>
    </>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS')
  .then((res) => res.json())

  return {
    props: {
      searchResults,
    }
  }
}