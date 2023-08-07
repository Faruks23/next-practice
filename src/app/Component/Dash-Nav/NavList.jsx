import Link from 'next/link';
import React from 'react';

const NavList = () => {
  return (
    <div className=''>
      <ul className=' w-[400px] h-[400px] p-10 bg-pink-500'>
        <Link href={'/Dashboard/mange-produt'}>
          {" "}
          <li>MenageProduct</li>
        </Link>
        <Link href={'/Dashboard/add-product'}>
          {" "}
          <li>Add Product</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavList;