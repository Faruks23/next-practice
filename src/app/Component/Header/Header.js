'use client'
import Link from 'next/link';

import style from './Header.module.css'
import { useContext } from 'react';
import { ThemeContext } from '../../autProvider';


const Header = () => {
  const {email,name}= useContext(ThemeContext)
  console.log(email,name);
  return (
    <div className={`${style.Navbar}  text-white`}>
      <Link href={"/"}>
        {" "}
        <li className="btn btn-ghost normal-case text-xl">daisyUI</li>
      </Link>
      <ul className="flex justify-center gap-8">
        <li>
          {" "}
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/Profile"}>Profile</Link>
        </li>

        <li>
          {" "}
          <Link href={"/about"}>About</Link>
        </li>
      
            <li>
              {" "}
              <Link href={"/Dashboard"}>Dashboard</Link>
            </li>
          
      
        <li>
          {" "}
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          {" "}
          <Link href={"/blog"}>{ email}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;