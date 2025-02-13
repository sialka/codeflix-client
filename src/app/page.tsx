'use client';

import Header from '../app/components/Header';
import { Banner } from '../app/components/Banner';
import { MovieRow } from '../app/components/MovieRow';

export default function Home() {
  return (
    <div className='relative bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='scrollbar-hide relative h-screen overflow-y-scroll pb-24 pl-4 lg:pl-16'>
        <Banner />
        <MovieRow sectionTitle='Trending Now' />
        <MovieRow sectionTitle='Top Rated' />
        <MovieRow sectionTitle='Action Movies' />
      </main>
    </div>
  );
}
