import React from 'react'

const CTA = () => {
  return (
    <>
      CTA
      <section className="w-[1170px] h-[293px] px-4 py-8 text-center flex text-white rounded-[20px] bg-gradient-to-tl from-[#11101D] from-90% to-[#ffffff] to-1%">
        <div className='w-3/4'>
          <h2 className='text-[48px] leading-[67.2px] font-medium'>Let’s try our service now!</h2>
          <p className='text-[18px] leading-[28.8px] font-normal'>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className='w-1/4'>
          <button className="w-[170px] h-[64px] rounded-[10px] text-[18px] font-medium leading-[27px] bg-gradient-to-t from-[#97fafd] to-[#BEF3F5]">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}

export default CTA