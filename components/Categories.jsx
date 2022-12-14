import Image from 'next/image'
import { categories } from './CategoryList'

const Categories = () => {
  return (
    <div className='sticky flex top-24 z-40 bg-white p-5 md:px-20 border-b border-neutral-200'>
      <div className='flex gap-12 whitespace-nowrap overflow-x-scroll scrollbar-hide'>
        {
          categories.map((category, i) => (
            <div key={i} className='flex flex-col items-center gap-2 font-medium text-[15px] hover:text-gray-800 cursor-pointer hover:underline underline-offset-8 decoration-4 decoration-gray-300 py-4 opacity-70 hover:opacity-100 first:pl-3 last:pr-6'>
              <Image alt="img" src={require(`../assets/img/${category.imgName}.jpg`)} className='' width={30} height={30}/>
              <p>{category.name}</p>
            </div>
          ))
        }
      </div> 
      <div className='flex gap-6 text-md items-center z-20'>
        <div className='border-2 border-gray-300 rounded-full p-1 cursor-pointer hover:border-gray-400 hover:scale-110 bg-white'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>  
        </div>
        <div className='flex gap-2 border-2 border-gray-300 px-4 py-3.5 rounded-xl cursor-pointer'> 
          <div className='block h-5 w-5 fill rgb(34, 34, 34)'>
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
          </div>
          <p>Filters</p>
        </div>
      </div>
    </div>
  )
}

export default Categories