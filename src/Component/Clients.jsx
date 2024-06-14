import React from 'react'

import Airbnb from '../assets/airbnb.png'
import Binance from '../assets/binance.png'
import Coinbase from '../assets/coinbase.png'
import Dropbox from '../assets/dropbox.png'

const Clients = () => {
  return (
    <>
      <section className="w-[1170px] h-[60px] flex justify-between">
        <img src={Airbnb} alt="Airbnb-img" className='w-[192.25px] h-[60px] text-[#424147]' />
        <img src={Binance} alt="Binance-img" className='w-[192.25px] h-[60px] text-[#424147]' />
        <img src={Coinbase} alt="Coinbase-img" className='w-[192.25px] h-[60px] text-[#424147]' />
        <img src={Dropbox} alt="Dropbox-img" className='w-[192.25px] h-[60px] text-[#424147]' />
      </section>
    </>
  );
}

export default Clients