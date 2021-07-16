import { tw } from 'twind/css';
import styled from 'styled-components';

import React from 'react';

const Header = () => (
  <header>
    <div className={tw(`w-full z-10 flex items-center justify-center mx-auto flex-wrap content-around`)}>
      <div className={tw(`my-8 md:w-full lg:w-2/5 flex items-center justify-center mx-auto flex-wrap`)}>
        <img src="/images/subaru.jpg" alt="" />
      </div>
      <div className={tw(`my-8 md:w-11/12 lg:w-2/5 text-left`)}>
        <h1 className={tw(`font-sans font-bold text-2xl md:text-2xl lg:text-4xl leading-snug text-gray-800`)}>
          The best place to buy your parts
        </h1>
        <p className={tw(`mt-10 text-gray-600  text-xl lg:text-3xl`)}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos expedita corrupti perspiciatis voluptas ea
          aperiam unde itaque sed eius obcaecati reiciendis, quasi modi neque fugit repudiandae quia sit aliquid
          consequuntur.
        </p>
      </div>
    </div>
  </header>
);

export default Header;
