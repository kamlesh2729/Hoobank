import React from 'react'

import Bill from '../assets/bill.png'
import Apple from '../assets/apple.svg'
import Anderoid from '../assets/google.svg'

const Billing = () => {
  return (
    <>
      <section className="w-[1170px] h-[383px] flex text-white">
        <main className="w-2/4">
          <img src={Bill} alt="card-img" className="w-full h-[383px]" />
        </main>

        <main className="w-2/4">
          <h2 className=" text-[48px] leading-[76.8px] font-semibold">
            Easily control your billing & invoicing.
          </h2>
          <p className="text-[18px] leading-[30.6px] font-normal">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <span className="w-[170px] h-[64px] flex rounded-[10px] text-[18px] font-medium leading-[27px] bg-gradient-to-t from-[#97fafd] to-[#BEF3F5]">
            <img src={Apple} alt="Apple-img" />
            <img src={Anderoid} alt="Anderoid-img" />
          </span>
        </main>
      </section>
    </>
  );
}

export default Billing