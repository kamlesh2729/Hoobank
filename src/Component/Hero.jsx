import React from 'react'

import Robohand from '../assets/robot.png'

const Hero = () => {
  return (
    <>
      <section className="w-full h-auto flex flex-col mt-1 text-white Lg-l:flex Lg-l:flex-row Lg-l:h-[674px]">
        <article className="h-[674px] w-full Lg-l:w-1/2 py-4 px-4">
          <p className="font-normal text-[18px]">
            20% DISCOUNT FOR 1 MONTH ACCOUNT
          </p>
          <h2 className="text-white font-semibold text-[72px]">The Next</h2>
          <h2 className="text-[#DEF9FA] font-semibold text-[72px]">
            Generation
          </h2>
          <h2 className="text-white font-semibold text-[72px]">
            Payment Method.
          </h2>
          <p className='h-[93px] w-[483px] font-normal text-[18px] text-white'>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </article>
        <article className="h-[674px] w-full pt-2 Lg-l:w-1/2">
          <img src={Robohand} alt="robotic-hand" className="h-[574px] w-full" />
        </article>
      </section>
    </>
  );
}

export default Hero
