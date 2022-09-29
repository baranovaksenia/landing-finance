import React from 'react';
import Link from 'next/link';

import { footer } from '../data';

const Footer = () => {
  // destucture footer data
  const { links, company, contact, social } = footer;
  return (
    <footer class='text-center lg:text-left bg-dark text-white'>
      <div class='flex items-center justify-between  p-6 border-b border-gray-300'>
        <div class='mr-12 hidden lg:block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div className='flex  item-center   lg:flex-end '>
          {social.map((item, index) => {
            const { icon, href } = item;
            return (
              <div
                className='bg-accent w-8 h-8 rounded-full flex items-center justify-center mr-3'
                key={index}
              >
                <a href={href}>{icon}</a>
              </div>
            );
          })}
        </div>
      </div>
      <div class='mx-6 py-10 text-center md:text-left'>
        <div class='grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div class=''>
            <h6
              class='
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
            
          '
            >
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='cubes'
                class='w-4 mr-3'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z'
                ></path>
              </svg>
              Keter Finance
            </h6>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div class=''>
            <h6 class='footer-heading'>Quick Links</h6>
            <div class='mb-4 flex flex-col gap-y-3'>
              {links.map((link, index) => {
                const { href, name } = link;
                return (
                  <Link
                    href={href}
                    key={index}
                  >
                    <a className='footer-link'>{name}</a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div class=''>
            <h6 class='footer-heading'>Company</h6>
            <div class='mb-4 flex flex-col gap-y-3'>
              {company.map((link, index) => {
                const { href, name } = link;
                return (
                  <Link
                    href={href}
                    key={index}
                  >
                    <a className='footer-link'>{name}</a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div class=''>
            <h6 class='footer-heading'>Contact</h6>

            {contact.map((item, index) => {
              const { name, icon } = item;
              return (
                <div
                  class='flex items-center justify-center md:justify-start mb-3'
                  key={index}
                >
                  <span className='text-accent mr-3'>{icon}</span>
                  <span className=''>{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div class='text-center p-6 bg-dark border-t border-gray-200 opacity-80'>
        <span>© {new Date().getFullYear()} </span>
        <a
          class='text-accent font-semibold'
          href='#'
        >
          XeniusStudio
        </a>
      </div>
    </footer>
  );
};

export default Footer;
