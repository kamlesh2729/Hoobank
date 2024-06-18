import React from 'react'

import Quote from '../assets/quotes.svg'
import People1 from '../assets/people01.png'
import People2 from '../assets/people02.png'
import People3 from '../assets/people03.png'

const Tesrimonials = () => {
  return (
    <>
      <section className="w-full h-auto Lg-l:h-[639px] px-4 mt-4 text-center text-white">
        <article className="w-full flex flex-col Lg-l:flex Lg-l:flex-row Lg-l:justify-between Lg-l:items-center">
          <h2 className="text-[48px] leading-[81.6px] font-semibold text-start">
            What people are saying about us
          </h2>
          <p className="text-[18px] leading-[32.4px] font-normal text-start ml-4">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </article>
        <article className="w-full flex flex-col Lg-l:flex Lg-l:flex-row">
          <div className='w-[370px] h-[385px] py-12 px-8 rounded-[20px] bg-gradient-to-tl from-[#11101D] from-6% via-[#6D6D6D] via-60% to-[#ffffff]'>
            <img src={Quote} alt="quotes-icon" className='w-[42.6px] h-[27.6px] mt-4' />
            <p className="text-[18px] mt-4 font-normal leading-[32.4px] text-start">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>
            <div className='h-[60px] w-[300px] mt-4 flex gap-4 items-center'>
              <div><img src={People1} alt="person-img" className='w-[48px] h-[48px]' /></div>
              <div className='text-start'>
              <h3 className="text-[20px] font-normal leading-[32px]">
                Herman Jensen
              </h3>
              <p className="text-[16px] font-normal leading-[24px]">
                Founder & Leader
              </p>
              </div>
            </div>
          </div>

          <div className='w-[370px] h-[385px] py-12 px-8 rounded-[20px]'>
            <img src={Quote} alt="quote-icon" className='w-[42.6px] h-[27.6px] mt-4'/>
            <p className="text-[18px] mt-4 font-normal leading-[32.4px] text-start">
              Money makes your life easier. If you're lucky to have it, you're
              lucky.
            </p>
            <div className='h-[60px] w-[300px] mt-12 flex gap-4 items-center'>
              <div>
              <img src={People2} alt="person-img" className='w-[48px] h-[48px]' />
              </div>
              <div className='text-start'>
              <h3 className="text-[20px] font-normal leading-[32px]">
                Steve Mark
              </h3>
              <p className="text-[16px] font-normal leading-[24px]">
                Founder & Leader
              </p>
              </div>
            </div>
          </div>

          <div className='w-[370px] h-[385px] py-12 px-8 rounded-[20px]'>
            <img src={Quote} alt="quote-icon" className='w-[42.6px] h-[27.6px] mt-4' />
            <p className="text-[18px] mt-4 font-normal leading-[32.4px] text-start">It is usually people in the money business, finance, and international trade that are really rich.</p>
            <div className='h-[60px] w-[300px] mt-4 flex gap-4 items-center'>
              <div>
              <img src={People3} alt="person-img" className='w-[48px] h-[48px]' />
              </div>
              <div className='text-start'>
              <h3 className="text-[20px] font-normal leading-[32px]">
                Kenn Gallagher
              </h3>
              <p className="text-[16px] font-normal leading-[24px]">
                Founder & Leader
              </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Tesrimonials