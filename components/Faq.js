import Image from 'next/image';
import React from 'react';
import { faqData } from '../data';

const Faq = () => {
  const { pretitle, title, image, accordions } = faqData;
  return (
    <section className='min-h-[900px] bg-dark px-[100px]'>
      <div className='container mx-auto w-[100%]'>
        <div
          className='flex items-center justify-between pt-[100px]
        '
        >
          {/* image */}
          <div className='relative '>
            <Image
              width={570}
              height={470}
              src={image}
              alt=''
            />
          </div>
          {/* contents */}
          <div className='flex flex-col'>
            <h3>{pretitle}</h3>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
