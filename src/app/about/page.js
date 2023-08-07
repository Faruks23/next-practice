'use client'
import React, { useContext } from 'react';
import { ThemeContext } from '../autProvider';

const AboutPage = () => {
  const { email, name } = useContext(ThemeContext)
  console.log("about",email,name);
  return (
    <div>
      <h1 className="text-2xl">This is AboutPage</h1>
      <div className="about">
        <h1>name:Md Faruk</h1>
        <h1>email:mdfaruksp2@gmail.com</h1>
        <h1>phone:01882759955</h1>
      </div>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vero doloribus cupiditate, dicta libero minus laudantium consequatur quaerat sapiente reiciendis deserunt, harum facere commodi nostrum quod sed reprehenderit. Esse, accusantium!</p>
    </div>
  );
};

export default AboutPage;