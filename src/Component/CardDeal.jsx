import React from 'react'

import Card from '../assets/card.png'

const CardDeal = () => {
  return (
    <>
      <section className="w-[1170px] h-[383px] flex text-white">
        <main className="w-2/4">
          <h2 className=" text-[48px] leading-[76.8px] font-semibold">
            Find a better card deal in few easy steps.
          </h2>
          <p className="text-[18px] leading-[30.6px] font-normal">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button className="w-[170px] h-[64px] rounded-[10px] text-[18px] font-medium leading-[27px] bg-gradient-to-t from-[#97fafd] to-[#BEF3F5]">
            Get Started
          </button>
        </main>
        <main className="w-2/4">
          <img src={Card} alt="card-img" className='w-full h-[383px]' />
        </main>
      </section>
    </>
  );
}

export default CardDeal