import React from 'react'
import TabsWidget from './components/TabsWidget'
import GalleryWidget from './components/GalleryWidget'
import 'remixicon/fonts/remixicon.css'

export default function App() {

  return (
    <div className="min-h-screen md:flex-wrap p-8 pt-20 bg-[#262A2F] text-white font-sans">
      <div className=" mx-auto flex flex-row  gap-20 items-start">
        <div className="w-1/2 hidden lg:block">
          <div className="h-[720px] rounded-2xl border border-white/10 p-6 bg-[#565758]"> 
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between items-center gap-4">
          <TabsWidget />
          <div className='h-1  shadow-[0px_4px_15px_#000000] w-2/3 bg-[#363C43] rounded-2xl'></div>
          <GalleryWidget />
          <div className='h-1  shadow-[0px_4px_15px_#000000] w-2/3 bg-[#363C43] rounded-2xl'></div>
        </div>
      </div>
    </div>
  )
}
