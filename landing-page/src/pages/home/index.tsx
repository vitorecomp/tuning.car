import TurboSection from 'pages/home/sections/turbo/turbo-section';
import MotorSection from 'pages/home/sections/motor/motor-section';
import SuspensionSection from 'pages/home/sections/suspension/suspension-section';
import MiscellaneousSection from 'pages/home/sections/miscellaneous/miscellaneous-section';

export default function Home() {
  return (
    <>
      <TurboSection />
      <MotorSection />
      <SuspensionSection />
      <MiscellaneousSection />
    </>
  );
}
