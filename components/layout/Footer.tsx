import React from 'react';

const Footer = () => {
  return (
    <footer className='relative bg-white dark:bg-mac-dark-background pt-8 pb-6'>
      <hr className="my-6 bg-white dark:bg-mac-dark-background" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-black dark:text-white font-semibold py-1">
            Copyright © {new Date().getFullYear()} by {"KKDAY QA"}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;