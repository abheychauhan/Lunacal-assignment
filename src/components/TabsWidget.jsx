import React, { useState, useRef, useEffect } from 'react';

const tabs = ['About Me', 'Experiences', 'Recommended'];
const content = {
  'About Me': `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
  
  I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
  'Experiences': `Work Experience:
- Sales Rep at Salesforce (3 years)
- Account Manager at TechCo (2 years)
Skills: Sales, CRM, Customer Success`,
  'Recommended': `Recommendations:
- Connect with senior sales advisors
- Read "SPIN Selling" and "The Challenger Sale" for techniques`
};

export default function TabsWidget() {
  const [active, setActive] = useState('About Me');
  const tabRefs = useRef({});
  const [bgStyle, setBgStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const currentTab = tabRefs.current[active];
    console.log(currentTab.offsetHeight);

    if (currentTab) {
      const { offsetLeft, offsetWidth, offsetRight } = currentTab;
      setBgStyle({ left: offsetLeft, right: offsetRight, top: currentTab.offsetTop, width: offsetWidth, height: currentTab.offsetHeight });
    }
  }, [active]);

  return (
    <section className="w-full h-full rounded-2xl md:p-6 shadow-neo bg-[#363c43] border border-black/40 relative flex p-2 gap-2">


     <div className='flex flex-col gap-20'>
        <div className="rounded-full border-1 border-gradient-to-r from-white to-black w-fit h-fit px-1">
        <i className="md:text-xl  text-sm ri-question-mark"></i>
      </div>
      <div className='grid grid-cols-2 gap-[2px]'>
        <div className='w-3 h-3 bg-[#4A4E54]'></div>
        <div className='w-3 h-3 bg-[#4A4E54]'></div>
        <div className='w-3 h-3 bg-[#4A4E54]'></div>
        <div className='w-3 h-3 bg-[#4A4E54]'></div>
        <div className='w-3 h-3 bg-[#4A4E54]'></div>
        <div className='w-3 h-3 bg-[#4A4E54]'></div>
      </div>
     </div>

      <div className='w-full'>
        <div className="relative w-full h-fit bg-black rounded-2xl">
          <div
            className={`absolute top-2 bg-[#28292f] rounded-2xl transition-all duration-500 shadow-[0_30px_70px_5px_rgba(0,0,0,6)]  p-3 ease`}
            style={{ left: bgStyle.left, width: bgStyle.width, height: bgStyle.height, right: bgStyle.right, top: bgStyle.top }}
          />

          {/* Tabs */}
          <div className="flex w-full  justify-between md:gap-3 p-1 rounded-2xl relative ">
            
            {tabs.map(tab => (
              <button
                id='tab'
                key={tab}
                ref={el => (tabRefs.current[tab] = el)}
                onClick={() => setActive(tab)}
                className={`p-2 rounded-2xl text-xs md:text-xl md:px-6 focus:outline-none transition-colors duration-200 ${active === tab ? 'text-white' : 'text-gray-400'
                  }`}
                aria-pressed={active === tab}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div id='content' className="mt-6 h-40 md:text-xl  overflow-y-auto p-3 text-[#66696c] leading-7 whitespace-pre-line">
          <p>{content[active]}</p>
        </div>
      </div>

    </section>
  );
}