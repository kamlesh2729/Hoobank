import React from 'react'

const Stats = () => {
  return (
    <>
      <section className=" text-white w-[1151.81px] h-[52.82px] flex justify-center">
        <div className=" flex gap-4 items-center justify-center text-center">
          <h1 className=" w-[158.46px] h-[52.82px] font-semibold text-[40.89px] leading-[53.16px]">3800+</h1>
          <p className=" text-[#33bbcf] uppercase font-normal text-[20.45px] leading-[26.58px] font-[Poppins]">User active</p>
        </div>
        <div className=" flex gap-2 items-center justify-center text-center border-x-2 border-white">
          <h1 className="font-semibold text-[40.89px] leading-[53.16px]">230+</h1>
          <p className=" text-[#33bbcf] uppercase font-normal text-[20.45px] leading-[26.58px] font-[Poppins]">Tusted by company</p>
        </div>
        <div className=" flex gap-2 items-center justify-center text-center">
          <h1 className="font-semibold text-[40.89px] leading-[53.16px]">$230M+</h1>
          <p className=" text-[#33bbcf] uppercase font-normal text-[20.45px] leading-[26.58px] font-[Poppins]">transatiomn</p>
        </div>
      </section>
    </>
  );
}

export default Stats