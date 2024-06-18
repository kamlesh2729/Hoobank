import React from 'react'

import Logo from '../assets/logo.svg';
import INST from '../assets/instagram.svg';
import FB from '../assets/facebook.svg';
import TWIT from '../assets/twitter.svg';
import LINK from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <>
      <section className="w-full h-[243px] px-4 py-8 mt-4 text-center text-white">
        <article className="border-b border-[#3F3E45] flex">
          <div className="w-[30%] text-start pb-7 px-4">
            <img src={Logo} alt="Footer-logo" />
            <p className="text-[18px] font-semibold leading-[32px] text-[#FFFFFFB2]">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          <div className="w-[70%] flex justify-around">
            <ul className="text-start">
              <h2 className="text-[18px] leading-[27px] font-medium">
                Usefull Links
              </h2>
              <li className="text-[16px] leading-[24px] font-normal">
                Content
              </li>
              <li className="text-[16px] leading-[24px] font-normal">
                How it Works
              </li>
              <li className="text-[16px] leading-[24px] font-normal">Create</li>
              <li className="text-[16px] leading-[24px] font-normal">
                Explore
              </li>
              <li className="text-[16px] leading-[24px] font-normal">
                Term & Services
              </li>
            </ul>
            <ul className="text-start">
              <h2 className="text-[18px] leading-[27px] font-medium">
                Community
              </h2>
              <li className="text-[16px] leading-[24px] font-normal">
                Help Center
              </li>
              <li className="text-[16px] leading-[24px] font-normal">
                Partners
              </li>
              <li className="text-[16px] leading-[24px] font-normal">
                Suggestions
              </li>
              <li className="text-[16px] leading-[24px] font-normal">Blog</li>
              <li className="text-[16px] leading-[24px] font-normal">
                Newsletters
              </li>
            </ul>
            <ul className="text-start">
              <h2 className="text-[18px] leading-[27px] font-medium">
                Partner
              </h2>
              <li className="text-[16px] leading-[24px] font-normal">
                Our Partner
              </li>
              <li className="text-[16px] leading-[24px] font-normal">
                Become a Partner
              </li>
            </ul>
          </div>
        </article>
        <article className='h-8 w-full flex mt-2 justify-between items-center'>
          <div>
          <p>Copyright 2021 HooBank. All Rights Reserved.</p>
          </div>
          <div className='w-[15%] flex gap-4'>
            <img src={INST} alt="social-meadia-icon" className='w-[21px] h-[21px]'/>
            <img src={FB} alt="social-meadia-icon" className='w-[21px] h-[21px]'/>
            <img src={TWIT} alt="social-meadia-icon" className='w-[21px] h-[21px]'/>
            <img src={LINK} alt="social-meadia-icon" className='w-[21px] h-[21px]'/>
          </div>
        </article>
      </section>
    </>
  );
}

export default Footer