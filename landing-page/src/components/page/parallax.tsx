import styled from 'styled-components';
import CSS from 'csstype';
import { tw } from 'twind/css';

const ParallaxMain = styled.div`
  perspective: 100px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0%;
  right: 0;
  bottom: 0;
`;

const parallaxStyle: CSS.Properties = {
  position: `absolute`,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const ParallaxImage = styled.img`
  display: block;
  position: absolute;
  bottom: 0;
`;

const ParallaxOne = styled.div`
  transform: translateZ(-300px) scale(4);
`;
const ParallaxTwo = styled.div`
  transform: translateZ(-250px) scale(3.5);
`;
const ParallaxThree = styled.div`
  transform: translateZ(-200px) scale(3);
`;
const ParallaxFour = styled.div`
  transform: translateZ(-150px) scale(2.5);
`;
const ParallaxFive = styled.div`
  transform: translateZ(-100px) scale(2);
`;
const ParallaxSix = styled.div`
  transform: translateZ(-50px) scale(1.5);
`;

const ParallaxSeven = styled.div`
  transform: translateZ(0px) scale(1);
`;

interface IProps {
  children: React.ReactNode;
}

const Parallax = ({ children }: IProps) => (
  <ParallaxMain>
    <div className={tw(`w-full min-h-screen relative`)}>
      <div className={tw(`absolute left-0 top-0 min-h-screen w-full overflow-hidden`)} />
      <div className={tw(`z-10 max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1
          className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}
        >
          Tuning Car
        </h1>
        <p className={tw(`mt-10 text-gray-600 text-center text-xl lg:text-3xl`)}>Car tuning make easy!</p>
      </div>
    </div>
    <ParallaxOne style={parallaxStyle}>
      <ParallaxImage src="/images/layer_0.png" alt="" />
    </ParallaxOne>
    <ParallaxTwo style={parallaxStyle}>
      <ParallaxImage src="/images/layer_1.png" alt="" />
    </ParallaxTwo>
    <ParallaxThree style={parallaxStyle}>
      <ParallaxImage src="/images/layer_2.png" alt="" />
    </ParallaxThree>
    <ParallaxFour style={parallaxStyle}>
      <ParallaxImage src="/images/layer_3.png" alt="" />
    </ParallaxFour>
    <ParallaxFive style={parallaxStyle}>
      <ParallaxImage src="/images/layer_4.png" alt="" />
    </ParallaxFive>
    <ParallaxSix style={parallaxStyle}>
      <ParallaxImage src="/images/layer_5.png" alt="" />
    </ParallaxSix>
    <ParallaxSeven style={parallaxStyle}>
      <ParallaxImage src="/images/layer_6.png" alt="" />
    </ParallaxSeven>
    {children}
  </ParallaxMain>
);

export default Parallax;
