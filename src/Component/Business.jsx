import React from 'react'

import Star from '../assets/Star.svg';
import Shield from '../assets/Shield.svg';
import Send from '../assets/Send.svg';

const Business = () => {
  return (
    <>
      <section className="w-[1170px] h-[383px] flex text-white">
        <main className="w-2/4">
          <h2 className=" text-[48px] leading-[76.8px] font-semibold">
            You do the business, we’ll handle the money.
          </h2>
          <p className="text-[18px] leading-[30.6px] font-normal">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <button className="w-[170px] h-[64px] rounded-[10px] text-[18px] font-medium leading-[27px] bg-gradient-to-t from-[#97fafd] to-[#BEF3F5]">
            Get Started
          </button>
        </main>
        <main className="w-2/4">
          <article className="w-[470px] h-[115px] rounded-2xl flex justify-center items-center">
            <div className="w-[64px] h-[64px]">
              <img
                src={Star}
                alt="Star-img"
                className="w-[38.4px] h-[38.4px]"
              />
            </div>
            <div>
              <h2 className="text-[18px] leading-[23.4px] font-semibold">
                Rewards
              </h2>
              <p className='text-[16px] leading-[24px] font-normal'>
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </article>
          <article className="w-[470px] h-[115px] rounded-2xl flex justify-center items-center bg-gradient-to-tl from-[#14101D] from-90% to-[#FFFFFF]">
            <div className="w-[64px] h-[64px]">
              <img
                src={Shield}
                alt="Shield-img"
                className="w-[38.4px] h-[38.4px]"
              />
            </div>
            <div>
              <h2 className="text-[18px] leading-[23.4px] font-semibold">
                100% Secured
              </h2>
              <p className='text-[16px] leading-[24px] font-normal'>
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </div>
          </article>
          <article className="w-[470px] h-[115px] rounded-2xl flex justify-center items-center">
            <div className="w-[64px] h-[64px]">
              <img
                src={Send}
                alt="Send-img"
                className="w-[38.4px] h-[38.4px]"
              />
            </div>
            <div>
              <h2 className="text-[18px] leading-[23.4px] font-semibold">
                Balance Transfer
              </h2>
              <p className='text-[16px] leading-[24px] font-normal'>
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </article>
        </main>
      </section>
    </>
  );
}

export default Business