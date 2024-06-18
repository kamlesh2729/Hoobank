import React from 'react'

import Airbnb from '../assets/airbnb.png'
import Binance from '../assets/binance.png'
import Coinbase from '../assets/coinbase.png'
import Dropbox from '../assets/dropbox.png'

const Clients = () => {
  return (
    <>
      <section className="w-full h-auto Lg-l:h-[80px] grid grid-cols-2 grid-rows-2 items-center gap-4 px-4 my-8 Lg-l:flex Lg-l:items-center Lg-l:justify-between">
        <img
          src={Airbnb}
          alt="Airbnb-img"
          className="w-[192.25px] h-[60px] text-[#424147]"
        />
        <img
          src={Binance}
          alt="Binance-img"
          className="w-[192.25px] h-[38.64px] text-[#424147]"
        />
        <img
          src={Coinbase}
          alt="Coinbase-img"
          className="w-[192.25px] h-[41.25px] text-[#424147]"
        />
        <img
          src={Dropbox}
          alt="Dropbox-img"
          className="w-[192.25px] h-[37.86px] text-[#424147]"
        />
      </section>
    </>
  );
}

export default Clients