
'use client'
import { ThemeContext } from '@/app/autProvider';
import React, { useContext } from 'react';

const Footer = () => {
  const {email,name}= useContext(ThemeContext)
  console.log("footer",email,name);
  return (
    <div>
      <h1 className='text-[4vw]'>This is Footer</h1>
    </div>
  );
};

export default Footer;