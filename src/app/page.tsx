'use client';
import Image from "next/image";
import Header from "@/components/Header";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { PlayIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className='relative bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative h-screen overflow-y-scroll pb-24 pl-4 lg:pl-16 scrollbar-hide'>

        <div className='flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
            <Image
              src='/banner.png'
              alt='MAID'
              fill={true}
              priority={true} 
              className='h-[65vh] object-cover object-top lg:h-[95vh]'
            />
          </div>

          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>MAID</h1>

          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            After fleeing an abusive relationship, a young mother finds a job
            cleaning houses as she flights to provide for her child and build
            them a better future.
          </p>
        </div>

        <div className='flex space-x-3'>          
          <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            <PlayIcon className="h-6" />
            Play
          </button>
          <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            <InformationCircleIcon className="h-6" />
            More Info
          </button>
        </div>

      <div className="flex-col space-y-4">
        <div className="flex space-x-4 overflow-x-scroll -scrollbar-hide">          
          {[1,2,3,4,5].map((index) => (
            <div key={index} className="group h-28 min-w-[200px] relative transform transition duration-200 ease-in hover:z-50 hover:scale-110">
              <Image
                key={index}
                src={`/item_${index}.png`}
                fill={true}
                alt=""
                className="rounded"
              />
            </div>
          ))}          
        </div>
      </div>

      </main>
    </div>
  );
}
