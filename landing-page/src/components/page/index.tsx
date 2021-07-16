import Head from 'next/head';
import Navigation from 'components/navigation';
import { tw } from 'twind';
import styled from 'styled-components';

import Parallax from './parallax';

interface IProps {
  children: React.ReactNode;
}

const ParallaxCover = styled.div`
  display: block;
  position: absolute;
  top: 100%;
  left: 0%;
  right: 0%;
  z-index: 2;
`;

const ParallaxChildren = styled.div`
  max-width: 100vw;
`;

const Page = ({ children }: IProps) => (
  <div>
    <Head>
      <link rel="icon" href="/logo.svg" />
    </Head>
    <div className={tw(`min-h-screen flex flex-col`)}>
      <Navigation />
      <Parallax>
        <ParallaxCover
          className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner flex flex-wrap content-center`)}
        >
          <ParallaxChildren>{children}</ParallaxChildren>
        </ParallaxCover>
      </Parallax>
    </div>
  </div>
);

export default Page;
