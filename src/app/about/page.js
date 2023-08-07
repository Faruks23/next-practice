'use client'
import React, { useContext } from 'react';
import { ThemeContext } from '../autProvider';

const AboutPage = () => {
  const { email, name } = useContext(ThemeContext)
  console.log("about",email,name);
  return (
    <div>
      <h1 className='text-2xl'>This is AboutPage</h1>
    </div>
  );
};

export default AboutPage;