import type { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import Hero from '../components/landingpage/hero'
import Features from '../components/landingpage/features'
import FeaturesBlocks from '../components/landingpage/features-blocks'
import Testimonials from '../components/landingpage/testimonials'
import Newsletter from '../components/landingpage/newsletter'

const HomePage: NextPage = () => {


  return (
    <ShopLayout title={'Hydrobrain - Home'} pageDescription={'Hydrobrain'}>
        
        <Hero />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />

    </ShopLayout>
  )
}

export default HomePage
