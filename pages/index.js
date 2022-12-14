import Head from 'next/head'
import Cards from '../components/Cards'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Holiday Homes &amp; Apartment Rentals - Airbnb - Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/airbnb.png" />
      </Head>
      <Header/>
      <Categories/>
      <Cards/>
      <Footer/>
    </div>
  )
}

// export async function getStaticProps () {
//   const exploreData = await fetch('')
// }

